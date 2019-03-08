import {SparqlEndpointFetcher} from 'fetch-sparql-endpoint';
import {List, Map, OrderedMap} from 'immutable';
import sizeof = require('object-sizeof');
import {GQLExecutionPlan} from '../models/GQLExecutionPlan';
import {GQLField} from '../models/GQLSelection';
import QueryResult from '../models/QueryResult';
import {RDFPrefixes} from '../models/RDFPrefixes';
import QueryStrategy from './QueryStrategy';

const prefixify = (name: string) => name.replace(/_/, ':');

export default class SparqlQueryStrategy extends QueryStrategy {
  private endpoint: string;
  public fetcher: SparqlEndpointFetcher = new SparqlEndpointFetcher();

  public constructor(fields: List<GQLField>,
                     plan: GQLExecutionPlan,
                     endpoint: string
  ) {
    super(fields, plan);
    this.endpoint = endpoint;
  }

  public getPrefixes() {
    return RDFPrefixes.DEFAULT_PREFIXES
      .valueSeq()
      .map(sn => `PREFIX ${sn.getPrefix()}: <${this.normalizePrefix(sn.getName())}>`)
      .join('\n');
  }

  /**
   * TODO add jubel, schema org prefixes to default RDFPrefixes list
   * @param {string} objectType
   * @param {Map<string, any>} args
   * @param {List<any>} projections
   * @returns {string}
   */
  public constructSparqlQuery(objectType: string, args: Map<string, any>, projections: List<any>) {
    return `${this.getPrefixes()}
      PREFIX j: <https://jubel.co/jtv/>
      PREFIX s: <http://schema.org/>
      SELECT ?s ${projections.map(a => `?${a.projection}`).join(' ') } ${this.hasProperParent() ? '?parentId' : ''}
      WHERE {
        ${ !this.hasProperParent() ? ` ?s a ${objectType}.` : '' }
        ${ this.addParentConstraints() }
        ${ this.spreadProjections(projections)} ${args.isEmpty() ? '' : '.' }
        ${ this.spreadArguments() }
        ${ (!this.argsWithoutReservedKeywords().isEmpty()) ? `FILTER ( ${this.addFilters()} )` : ''}
      }
      ${ this.addLimit() }
    `;
  }

  public async resolve(): Promise<QueryResult> {
    const objectType = prefixify(this.plan.resultType.get().name);
    const args = this.getArgs(this.plan);
    const projections = this.getProjections();
    console.log('Trying to execute: ', this.constructSparqlQuery(objectType, args, projections));
    console.log(
      'resolving',
      objectType,
      '{',
      projections.toJS(),
      '}',
      args.toJS()
    );
    let count;
    return new Promise((resolve, reject) => {
      this.fetcher.fetchBindings(
        this.endpoint,
        this.constructSparqlQuery(objectType, args, projections)
      ).then((stream) => {
        const resultArr: any[] = [];
        const errors: any[] = [];
        stream.on('data', data => {
          count++;
          resultArr.push(data);
        });
        stream.on('error', error => {
          errors.push(error);
        });
        stream.on('end', () => {
          /** Extracts 'value' string from each Literal{} query result so that it ends up as an List of keyval tuples
           * i.e: [{geo_lat: Literal{value: 123, type:NamedNode, language: _}, {...}}, {...}] => [['geo_lat': 123],...]]
           * @type {{}[]}
           */
          const resultArrValues: Array<{}> = resultArr.map(entry => {
            return Object.keys(entry).reduce((acc, key) => {
              acc[key] = entry[key]['value'];
              return acc;
            }, {});
          });
          const om = new OrderedMap<string, OrderedMap<string, any>>(
            resultArrValues.map(row =>
              [this.hasProperParent() ? row.parentId : row.s, OrderedMap<string, any>(this.fields.map(f => {
                const key = f.alias.getOrElse(f.name);
                return [key, row[key]];
              }))]
            )
          );
          const result = new QueryResult();
          result.data = om;
          return resolve(result);
        });
      })
        .catch(err => {
          console.error(err);
          reject(err);
        });
    });
  }

  // TODO this will be modified to enable filtering via 'filter' keyword..
  protected argsWithoutReservedKeywords() {
    const reserved = List(['limit', 'offset', 'order', 'filter', 'first', 'last']); // todo add all
    let argsWithoutReserved = this.args.asMutable();
    reserved.forEach(keyword => { argsWithoutReserved = argsWithoutReserved.remove(keyword); });
    return argsWithoutReserved;
  }

  protected getProjections() {
    return this.fields.map<{ name: string; projection: string }>(f => ({
      name: prefixify(f.name),
      projection: f.alias.getOrElse(f.name),
    }));
  }

  /**
   * Determines whether the plan has an actual parent object
   * @returns {GQLExecutionPlan}
   */
  protected hasProperParent() {
    return !this.plan.parent.getSubjectIds().isEmpty();
  }
  /**
   * In case of multiple SparQL statements
   */
  protected addConditionalOperator(len: number, index: number, operator: string) {
    return index === (len - 1) ? '' : operator;
  }

  protected spreadArguments() {
    const entriesArray = this.argsWithoutReservedKeywords().entrySeq();
    const entriesLen = entriesArray.size;
    return entriesArray.reduce((acc, [argName, _], i) => {
      acc += `?s ${prefixify(argName)} ?${argName} ${ this.addConditionalOperator(entriesLen, i, '.')}\n`;
      return acc;
    }, '');
  }

  protected spreadProjections(projections: List<any>) {
    const projLen = projections.size;
    return projections.map((a, i) => 'optional {?s ' + a.name + ' ?' + a.projection + '}' + this.addConditionalOperator(projLen, i, '.'))
      .join(' ');
  }

  protected addFilters() {
    let filterString: string = '';
    const entriesArray = this.argsWithoutReservedKeywords().entrySeq();
    const entriesLen = entriesArray.size;
    if (!this.argsWithoutReservedKeywords().isEmpty()) {
      filterString += entriesArray.reduce((acc, [argName, value], i) => {
        // todo other operators besides = in filter: string, add ardering & pagination as separate methods
        acc += `?${argName} = '${value}' ${this.addConditionalOperator(entriesLen, i, '&&')}`;
        return acc;
      }, '');
    }
    return filterString;
  }

  /**
   * Using the VALUES keyword
   */
  protected addParentConstraints() {
    if (this.hasProperParent()) {
      // todo add supp for multiple parents
      const ids = this.plan.parent.getSubjectIds().reduce((acc, sid) => {
        return acc += `<${sid}> \n`;
      }, '');
      return `VALUES ?parentId {
        ${ids}
      }
      ?parentId ${prefixify(this.plan.name)} ?s
      `;
    } else {
      return '';
    }
  }

  protected addLimit() {
    if (this.args.get('first')) {
      return `LIMIT ${this.args.get('first')}`;
    } else if (this.args.get('last')) {
      return `LIMIT ${this.args.get('last')}`;
    } else {
      return '';
    }
  }

  private normalizePrefix(prefix: string) {
    return prefix.split(']').join('');
  }
}
