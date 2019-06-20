import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { TextMatchPatternContext } from "./QueryModificationParser";
import { GeoNearbyPatternContext } from "./QueryModificationParser";
import { VarFeatureContext } from "./QueryModificationParser";
import { FeatureContext } from "./QueryModificationParser";
import { LatLonContext } from "./QueryModificationParser";
import { ComparisonPredicateContext } from "./QueryModificationParser";
import { InPredicateContext } from "./QueryModificationParser";
import { InVarPredicateContext } from "./QueryModificationParser";
import { ParenPredicateContext } from "./QueryModificationParser";
import { BuiltinCallAtomContext } from "./QueryModificationParser";
import { FunctionCallAtomContext } from "./QueryModificationParser";
import { RdfLiteralAtomContext } from "./QueryModificationParser";
import { StringLiteralAtomContext } from "./QueryModificationParser";
import { NumericLiteralAtomContext } from "./QueryModificationParser";
import { BooleanLiteralAtomContext } from "./QueryModificationParser";
import { IriRefAtomContext } from "./QueryModificationParser";
import { FieldRefAtomContext } from "./QueryModificationParser";
import { VarRefAtomContext } from "./QueryModificationParser";
import { LangRdfLiteralContext } from "./QueryModificationParser";
import { DtRdfLiteralContext } from "./QueryModificationParser";
import { IntegerLiteralContext } from "./QueryModificationParser";
import { DecimalLiteralContext } from "./QueryModificationParser";
import { DoubleLiteralContext } from "./QueryModificationParser";
import { UnaryExpressionContext } from "./QueryModificationParser";
import { FactorExpressionContext } from "./QueryModificationParser";
import { TermExpressionContext } from "./QueryModificationParser";
import { PrimitiveExpressionContext } from "./QueryModificationParser";
import { ParenExpressionContext } from "./QueryModificationParser";
import { TextMatchBoostParamContext } from "./QueryModificationParser";
import { TextMatchMinScoreParamContext } from "./QueryModificationParser";
import { TextMatchMaxHitsParamContext } from "./QueryModificationParser";
import { FuncWithoutArgsContext } from "./QueryModificationParser";
import { FuncWithArgsContext } from "./QueryModificationParser";
import { LiteralIriRefContext } from "./QueryModificationParser";
import { PrefixedNameIriRefContext } from "./QueryModificationParser";
import { AbsFuncContext } from "./QueryModificationParser";
import { BoundFuncContext } from "./QueryModificationParser";
import { CeilFuncContext } from "./QueryModificationParser";
import { CoalesceFuncContext } from "./QueryModificationParser";
import { ConcatFuncContext } from "./QueryModificationParser";
import { ContainsFuncContext } from "./QueryModificationParser";
import { DatatypeFuncContext } from "./QueryModificationParser";
import { DayFuncContext } from "./QueryModificationParser";
import { EncodeForUriFuncContext } from "./QueryModificationParser";
import { ExistsFuncContext } from "./QueryModificationParser";
import { FloorFuncContext } from "./QueryModificationParser";
import { HoursFuncContext } from "./QueryModificationParser";
import { IfFuncContext } from "./QueryModificationParser";
import { IriFuncContext } from "./QueryModificationParser";
import { IsBlankFuncContext } from "./QueryModificationParser";
import { IsIriFuncContext } from "./QueryModificationParser";
import { IsLiteralFuncContext } from "./QueryModificationParser";
import { IsNumericFuncContext } from "./QueryModificationParser";
import { IsURIFuncContext } from "./QueryModificationParser";
import { LangFuncContext } from "./QueryModificationParser";
import { LangMatchesFuncContext } from "./QueryModificationParser";
import { LcaseFuncContext } from "./QueryModificationParser";
import { Md5FuncContext } from "./QueryModificationParser";
import { MinutesFuncContext } from "./QueryModificationParser";
import { MonthFuncContext } from "./QueryModificationParser";
import { NowFuncContext } from "./QueryModificationParser";
import { RandFuncContext } from "./QueryModificationParser";
import { RegexFuncContext } from "./QueryModificationParser";
import { ReplaceFuncContext } from "./QueryModificationParser";
import { RoundFuncContext } from "./QueryModificationParser";
import { SameTermFuncContext } from "./QueryModificationParser";
import { SecondsFuncContext } from "./QueryModificationParser";
import { Sha1FuncContext } from "./QueryModificationParser";
import { Sha256FuncContext } from "./QueryModificationParser";
import { Sha384FuncContext } from "./QueryModificationParser";
import { Sha512FuncContext } from "./QueryModificationParser";
import { StrFuncContext } from "./QueryModificationParser";
import { StrAfterFuncContext } from "./QueryModificationParser";
import { StrBeforeFuncContext } from "./QueryModificationParser";
import { StrDtFuncContext } from "./QueryModificationParser";
import { StrEndsFuncContext } from "./QueryModificationParser";
import { StrLangFuncContext } from "./QueryModificationParser";
import { StrLenFuncContext } from "./QueryModificationParser";
import { StrStartsFuncContext } from "./QueryModificationParser";
import { StrUuidFuncContext } from "./QueryModificationParser";
import { SubstrFuncContext } from "./QueryModificationParser";
import { TimezoneFuncContext } from "./QueryModificationParser";
import { TzFuncContext } from "./QueryModificationParser";
import { UcaseFuncContext } from "./QueryModificationParser";
import { UriFuncContext } from "./QueryModificationParser";
import { UuidFuncContext } from "./QueryModificationParser";
import { YearFuncContext } from "./QueryModificationParser";
import { FollowsUserBoostContext } from "./QueryModificationParser";
import { FollowedByUserBoostContext } from "./QueryModificationParser";
import { FilterContext } from "./QueryModificationParser";
import { PatternsContext } from "./QueryModificationParser";
import { BoostersContext } from "./QueryModificationParser";
import { BindingsContext } from "./QueryModificationParser";
import { OrderBysContext } from "./QueryModificationParser";
import { OrderByContext } from "./QueryModificationParser";
import { TransformsContext } from "./QueryModificationParser";
import { TransformContext } from "./QueryModificationParser";
import { SearchConditionContext } from "./QueryModificationParser";
import { SearchConditionAndContext } from "./QueryModificationParser";
import { SearchConditionNotContext } from "./QueryModificationParser";
import { PredicateContext } from "./QueryModificationParser";
import { ExpressionContext } from "./QueryModificationParser";
import { ExpressionAtomContext } from "./QueryModificationParser";
import { BuiltinCallContext } from "./QueryModificationParser";
import { PatternContext } from "./QueryModificationParser";
import { TextMatchParamContext } from "./QueryModificationParser";
import { BoostContext } from "./QueryModificationParser";
import { BindingContext } from "./QueryModificationParser";
import { ExpressionListContext } from "./QueryModificationParser";
import { FeatureOrLatLonContext } from "./QueryModificationParser";
import { ProximitySpecContext } from "./QueryModificationParser";
import { FunctionCallContext } from "./QueryModificationParser";
import { RdfLiteralContext } from "./QueryModificationParser";
import { NumericLiteralContext } from "./QueryModificationParser";
import { VarRefContext } from "./QueryModificationParser";
import { FieldRefContext } from "./QueryModificationParser";
import { ComparisonOpContext } from "./QueryModificationParser";
import { UnaryOpContext } from "./QueryModificationParser";
import { FactorOpContext } from "./QueryModificationParser";
import { TermOpContext } from "./QueryModificationParser";
import { StringLiteralContext } from "./QueryModificationParser";
import { StringLiteralOrVarRefContext } from "./QueryModificationParser";
import { BooleanLiteralContext } from "./QueryModificationParser";
import { IriRefOrVarRefContext } from "./QueryModificationParser";
import { NumericLiteralOrVarRefContext } from "./QueryModificationParser";
import { IriRefContext } from "./QueryModificationParser";
import { PrefixedNameContext } from "./QueryModificationParser";
import { BlankNodeContext } from "./QueryModificationParser";
export interface QueryModificationListener extends ParseTreeListener {
    enterTextMatchPattern?: (ctx: TextMatchPatternContext) => void;
    exitTextMatchPattern?: (ctx: TextMatchPatternContext) => void;
    enterGeoNearbyPattern?: (ctx: GeoNearbyPatternContext) => void;
    exitGeoNearbyPattern?: (ctx: GeoNearbyPatternContext) => void;
    enterVarFeature?: (ctx: VarFeatureContext) => void;
    exitVarFeature?: (ctx: VarFeatureContext) => void;
    enterFeature?: (ctx: FeatureContext) => void;
    exitFeature?: (ctx: FeatureContext) => void;
    enterLatLon?: (ctx: LatLonContext) => void;
    exitLatLon?: (ctx: LatLonContext) => void;
    enterComparisonPredicate?: (ctx: ComparisonPredicateContext) => void;
    exitComparisonPredicate?: (ctx: ComparisonPredicateContext) => void;
    enterInPredicate?: (ctx: InPredicateContext) => void;
    exitInPredicate?: (ctx: InPredicateContext) => void;
    enterInVarPredicate?: (ctx: InVarPredicateContext) => void;
    exitInVarPredicate?: (ctx: InVarPredicateContext) => void;
    enterParenPredicate?: (ctx: ParenPredicateContext) => void;
    exitParenPredicate?: (ctx: ParenPredicateContext) => void;
    enterBuiltinCallAtom?: (ctx: BuiltinCallAtomContext) => void;
    exitBuiltinCallAtom?: (ctx: BuiltinCallAtomContext) => void;
    enterFunctionCallAtom?: (ctx: FunctionCallAtomContext) => void;
    exitFunctionCallAtom?: (ctx: FunctionCallAtomContext) => void;
    enterRdfLiteralAtom?: (ctx: RdfLiteralAtomContext) => void;
    exitRdfLiteralAtom?: (ctx: RdfLiteralAtomContext) => void;
    enterStringLiteralAtom?: (ctx: StringLiteralAtomContext) => void;
    exitStringLiteralAtom?: (ctx: StringLiteralAtomContext) => void;
    enterNumericLiteralAtom?: (ctx: NumericLiteralAtomContext) => void;
    exitNumericLiteralAtom?: (ctx: NumericLiteralAtomContext) => void;
    enterBooleanLiteralAtom?: (ctx: BooleanLiteralAtomContext) => void;
    exitBooleanLiteralAtom?: (ctx: BooleanLiteralAtomContext) => void;
    enterIriRefAtom?: (ctx: IriRefAtomContext) => void;
    exitIriRefAtom?: (ctx: IriRefAtomContext) => void;
    enterFieldRefAtom?: (ctx: FieldRefAtomContext) => void;
    exitFieldRefAtom?: (ctx: FieldRefAtomContext) => void;
    enterVarRefAtom?: (ctx: VarRefAtomContext) => void;
    exitVarRefAtom?: (ctx: VarRefAtomContext) => void;
    enterLangRdfLiteral?: (ctx: LangRdfLiteralContext) => void;
    exitLangRdfLiteral?: (ctx: LangRdfLiteralContext) => void;
    enterDtRdfLiteral?: (ctx: DtRdfLiteralContext) => void;
    exitDtRdfLiteral?: (ctx: DtRdfLiteralContext) => void;
    enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
    exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
    enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    enterDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
    exitDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
    enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
    exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;
    enterFactorExpression?: (ctx: FactorExpressionContext) => void;
    exitFactorExpression?: (ctx: FactorExpressionContext) => void;
    enterTermExpression?: (ctx: TermExpressionContext) => void;
    exitTermExpression?: (ctx: TermExpressionContext) => void;
    enterPrimitiveExpression?: (ctx: PrimitiveExpressionContext) => void;
    exitPrimitiveExpression?: (ctx: PrimitiveExpressionContext) => void;
    enterParenExpression?: (ctx: ParenExpressionContext) => void;
    exitParenExpression?: (ctx: ParenExpressionContext) => void;
    enterTextMatchBoostParam?: (ctx: TextMatchBoostParamContext) => void;
    exitTextMatchBoostParam?: (ctx: TextMatchBoostParamContext) => void;
    enterTextMatchMinScoreParam?: (ctx: TextMatchMinScoreParamContext) => void;
    exitTextMatchMinScoreParam?: (ctx: TextMatchMinScoreParamContext) => void;
    enterTextMatchMaxHitsParam?: (ctx: TextMatchMaxHitsParamContext) => void;
    exitTextMatchMaxHitsParam?: (ctx: TextMatchMaxHitsParamContext) => void;
    enterFuncWithoutArgs?: (ctx: FuncWithoutArgsContext) => void;
    exitFuncWithoutArgs?: (ctx: FuncWithoutArgsContext) => void;
    enterFuncWithArgs?: (ctx: FuncWithArgsContext) => void;
    exitFuncWithArgs?: (ctx: FuncWithArgsContext) => void;
    enterLiteralIriRef?: (ctx: LiteralIriRefContext) => void;
    exitLiteralIriRef?: (ctx: LiteralIriRefContext) => void;
    enterPrefixedNameIriRef?: (ctx: PrefixedNameIriRefContext) => void;
    exitPrefixedNameIriRef?: (ctx: PrefixedNameIriRefContext) => void;
    enterAbsFunc?: (ctx: AbsFuncContext) => void;
    exitAbsFunc?: (ctx: AbsFuncContext) => void;
    enterBoundFunc?: (ctx: BoundFuncContext) => void;
    exitBoundFunc?: (ctx: BoundFuncContext) => void;
    enterCeilFunc?: (ctx: CeilFuncContext) => void;
    exitCeilFunc?: (ctx: CeilFuncContext) => void;
    enterCoalesceFunc?: (ctx: CoalesceFuncContext) => void;
    exitCoalesceFunc?: (ctx: CoalesceFuncContext) => void;
    enterConcatFunc?: (ctx: ConcatFuncContext) => void;
    exitConcatFunc?: (ctx: ConcatFuncContext) => void;
    enterContainsFunc?: (ctx: ContainsFuncContext) => void;
    exitContainsFunc?: (ctx: ContainsFuncContext) => void;
    enterDatatypeFunc?: (ctx: DatatypeFuncContext) => void;
    exitDatatypeFunc?: (ctx: DatatypeFuncContext) => void;
    enterDayFunc?: (ctx: DayFuncContext) => void;
    exitDayFunc?: (ctx: DayFuncContext) => void;
    enterEncodeForUriFunc?: (ctx: EncodeForUriFuncContext) => void;
    exitEncodeForUriFunc?: (ctx: EncodeForUriFuncContext) => void;
    enterExistsFunc?: (ctx: ExistsFuncContext) => void;
    exitExistsFunc?: (ctx: ExistsFuncContext) => void;
    enterFloorFunc?: (ctx: FloorFuncContext) => void;
    exitFloorFunc?: (ctx: FloorFuncContext) => void;
    enterHoursFunc?: (ctx: HoursFuncContext) => void;
    exitHoursFunc?: (ctx: HoursFuncContext) => void;
    enterIfFunc?: (ctx: IfFuncContext) => void;
    exitIfFunc?: (ctx: IfFuncContext) => void;
    enterIriFunc?: (ctx: IriFuncContext) => void;
    exitIriFunc?: (ctx: IriFuncContext) => void;
    enterIsBlankFunc?: (ctx: IsBlankFuncContext) => void;
    exitIsBlankFunc?: (ctx: IsBlankFuncContext) => void;
    enterIsIriFunc?: (ctx: IsIriFuncContext) => void;
    exitIsIriFunc?: (ctx: IsIriFuncContext) => void;
    enterIsLiteralFunc?: (ctx: IsLiteralFuncContext) => void;
    exitIsLiteralFunc?: (ctx: IsLiteralFuncContext) => void;
    enterIsNumericFunc?: (ctx: IsNumericFuncContext) => void;
    exitIsNumericFunc?: (ctx: IsNumericFuncContext) => void;
    enterIsURIFunc?: (ctx: IsURIFuncContext) => void;
    exitIsURIFunc?: (ctx: IsURIFuncContext) => void;
    enterLangFunc?: (ctx: LangFuncContext) => void;
    exitLangFunc?: (ctx: LangFuncContext) => void;
    enterLangMatchesFunc?: (ctx: LangMatchesFuncContext) => void;
    exitLangMatchesFunc?: (ctx: LangMatchesFuncContext) => void;
    enterLcaseFunc?: (ctx: LcaseFuncContext) => void;
    exitLcaseFunc?: (ctx: LcaseFuncContext) => void;
    enterMd5Func?: (ctx: Md5FuncContext) => void;
    exitMd5Func?: (ctx: Md5FuncContext) => void;
    enterMinutesFunc?: (ctx: MinutesFuncContext) => void;
    exitMinutesFunc?: (ctx: MinutesFuncContext) => void;
    enterMonthFunc?: (ctx: MonthFuncContext) => void;
    exitMonthFunc?: (ctx: MonthFuncContext) => void;
    enterNowFunc?: (ctx: NowFuncContext) => void;
    exitNowFunc?: (ctx: NowFuncContext) => void;
    enterRandFunc?: (ctx: RandFuncContext) => void;
    exitRandFunc?: (ctx: RandFuncContext) => void;
    enterRegexFunc?: (ctx: RegexFuncContext) => void;
    exitRegexFunc?: (ctx: RegexFuncContext) => void;
    enterReplaceFunc?: (ctx: ReplaceFuncContext) => void;
    exitReplaceFunc?: (ctx: ReplaceFuncContext) => void;
    enterRoundFunc?: (ctx: RoundFuncContext) => void;
    exitRoundFunc?: (ctx: RoundFuncContext) => void;
    enterSameTermFunc?: (ctx: SameTermFuncContext) => void;
    exitSameTermFunc?: (ctx: SameTermFuncContext) => void;
    enterSecondsFunc?: (ctx: SecondsFuncContext) => void;
    exitSecondsFunc?: (ctx: SecondsFuncContext) => void;
    enterSha1Func?: (ctx: Sha1FuncContext) => void;
    exitSha1Func?: (ctx: Sha1FuncContext) => void;
    enterSha256Func?: (ctx: Sha256FuncContext) => void;
    exitSha256Func?: (ctx: Sha256FuncContext) => void;
    enterSha384Func?: (ctx: Sha384FuncContext) => void;
    exitSha384Func?: (ctx: Sha384FuncContext) => void;
    enterSha512Func?: (ctx: Sha512FuncContext) => void;
    exitSha512Func?: (ctx: Sha512FuncContext) => void;
    enterStrFunc?: (ctx: StrFuncContext) => void;
    exitStrFunc?: (ctx: StrFuncContext) => void;
    enterStrAfterFunc?: (ctx: StrAfterFuncContext) => void;
    exitStrAfterFunc?: (ctx: StrAfterFuncContext) => void;
    enterStrBeforeFunc?: (ctx: StrBeforeFuncContext) => void;
    exitStrBeforeFunc?: (ctx: StrBeforeFuncContext) => void;
    enterStrDtFunc?: (ctx: StrDtFuncContext) => void;
    exitStrDtFunc?: (ctx: StrDtFuncContext) => void;
    enterStrEndsFunc?: (ctx: StrEndsFuncContext) => void;
    exitStrEndsFunc?: (ctx: StrEndsFuncContext) => void;
    enterStrLangFunc?: (ctx: StrLangFuncContext) => void;
    exitStrLangFunc?: (ctx: StrLangFuncContext) => void;
    enterStrLenFunc?: (ctx: StrLenFuncContext) => void;
    exitStrLenFunc?: (ctx: StrLenFuncContext) => void;
    enterStrStartsFunc?: (ctx: StrStartsFuncContext) => void;
    exitStrStartsFunc?: (ctx: StrStartsFuncContext) => void;
    enterStrUuidFunc?: (ctx: StrUuidFuncContext) => void;
    exitStrUuidFunc?: (ctx: StrUuidFuncContext) => void;
    enterSubstrFunc?: (ctx: SubstrFuncContext) => void;
    exitSubstrFunc?: (ctx: SubstrFuncContext) => void;
    enterTimezoneFunc?: (ctx: TimezoneFuncContext) => void;
    exitTimezoneFunc?: (ctx: TimezoneFuncContext) => void;
    enterTzFunc?: (ctx: TzFuncContext) => void;
    exitTzFunc?: (ctx: TzFuncContext) => void;
    enterUcaseFunc?: (ctx: UcaseFuncContext) => void;
    exitUcaseFunc?: (ctx: UcaseFuncContext) => void;
    enterUriFunc?: (ctx: UriFuncContext) => void;
    exitUriFunc?: (ctx: UriFuncContext) => void;
    enterUuidFunc?: (ctx: UuidFuncContext) => void;
    exitUuidFunc?: (ctx: UuidFuncContext) => void;
    enterYearFunc?: (ctx: YearFuncContext) => void;
    exitYearFunc?: (ctx: YearFuncContext) => void;
    enterFollowsUserBoost?: (ctx: FollowsUserBoostContext) => void;
    exitFollowsUserBoost?: (ctx: FollowsUserBoostContext) => void;
    enterFollowedByUserBoost?: (ctx: FollowedByUserBoostContext) => void;
    exitFollowedByUserBoost?: (ctx: FollowedByUserBoostContext) => void;
    enterFilter?: (ctx: FilterContext) => void;
    exitFilter?: (ctx: FilterContext) => void;
    enterPatterns?: (ctx: PatternsContext) => void;
    exitPatterns?: (ctx: PatternsContext) => void;
    enterBoosters?: (ctx: BoostersContext) => void;
    exitBoosters?: (ctx: BoostersContext) => void;
    enterBindings?: (ctx: BindingsContext) => void;
    exitBindings?: (ctx: BindingsContext) => void;
    enterOrderBys?: (ctx: OrderBysContext) => void;
    exitOrderBys?: (ctx: OrderBysContext) => void;
    enterOrderBy?: (ctx: OrderByContext) => void;
    exitOrderBy?: (ctx: OrderByContext) => void;
    enterTransforms?: (ctx: TransformsContext) => void;
    exitTransforms?: (ctx: TransformsContext) => void;
    enterTransform?: (ctx: TransformContext) => void;
    exitTransform?: (ctx: TransformContext) => void;
    enterSearchCondition?: (ctx: SearchConditionContext) => void;
    exitSearchCondition?: (ctx: SearchConditionContext) => void;
    enterSearchConditionAnd?: (ctx: SearchConditionAndContext) => void;
    exitSearchConditionAnd?: (ctx: SearchConditionAndContext) => void;
    enterSearchConditionNot?: (ctx: SearchConditionNotContext) => void;
    exitSearchConditionNot?: (ctx: SearchConditionNotContext) => void;
    enterPredicate?: (ctx: PredicateContext) => void;
    exitPredicate?: (ctx: PredicateContext) => void;
    enterExpression?: (ctx: ExpressionContext) => void;
    exitExpression?: (ctx: ExpressionContext) => void;
    enterExpressionAtom?: (ctx: ExpressionAtomContext) => void;
    exitExpressionAtom?: (ctx: ExpressionAtomContext) => void;
    enterBuiltinCall?: (ctx: BuiltinCallContext) => void;
    exitBuiltinCall?: (ctx: BuiltinCallContext) => void;
    enterPattern?: (ctx: PatternContext) => void;
    exitPattern?: (ctx: PatternContext) => void;
    enterTextMatchParam?: (ctx: TextMatchParamContext) => void;
    exitTextMatchParam?: (ctx: TextMatchParamContext) => void;
    enterBoost?: (ctx: BoostContext) => void;
    exitBoost?: (ctx: BoostContext) => void;
    enterBinding?: (ctx: BindingContext) => void;
    exitBinding?: (ctx: BindingContext) => void;
    enterExpressionList?: (ctx: ExpressionListContext) => void;
    exitExpressionList?: (ctx: ExpressionListContext) => void;
    enterFeatureOrLatLon?: (ctx: FeatureOrLatLonContext) => void;
    exitFeatureOrLatLon?: (ctx: FeatureOrLatLonContext) => void;
    enterProximitySpec?: (ctx: ProximitySpecContext) => void;
    exitProximitySpec?: (ctx: ProximitySpecContext) => void;
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    enterRdfLiteral?: (ctx: RdfLiteralContext) => void;
    exitRdfLiteral?: (ctx: RdfLiteralContext) => void;
    enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
    exitNumericLiteral?: (ctx: NumericLiteralContext) => void;
    enterVarRef?: (ctx: VarRefContext) => void;
    exitVarRef?: (ctx: VarRefContext) => void;
    enterFieldRef?: (ctx: FieldRefContext) => void;
    exitFieldRef?: (ctx: FieldRefContext) => void;
    enterComparisonOp?: (ctx: ComparisonOpContext) => void;
    exitComparisonOp?: (ctx: ComparisonOpContext) => void;
    enterUnaryOp?: (ctx: UnaryOpContext) => void;
    exitUnaryOp?: (ctx: UnaryOpContext) => void;
    enterFactorOp?: (ctx: FactorOpContext) => void;
    exitFactorOp?: (ctx: FactorOpContext) => void;
    enterTermOp?: (ctx: TermOpContext) => void;
    exitTermOp?: (ctx: TermOpContext) => void;
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
    enterStringLiteralOrVarRef?: (ctx: StringLiteralOrVarRefContext) => void;
    exitStringLiteralOrVarRef?: (ctx: StringLiteralOrVarRefContext) => void;
    enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    enterIriRefOrVarRef?: (ctx: IriRefOrVarRefContext) => void;
    exitIriRefOrVarRef?: (ctx: IriRefOrVarRefContext) => void;
    enterNumericLiteralOrVarRef?: (ctx: NumericLiteralOrVarRefContext) => void;
    exitNumericLiteralOrVarRef?: (ctx: NumericLiteralOrVarRefContext) => void;
    enterIriRef?: (ctx: IriRefContext) => void;
    exitIriRef?: (ctx: IriRefContext) => void;
    enterPrefixedName?: (ctx: PrefixedNameContext) => void;
    exitPrefixedName?: (ctx: PrefixedNameContext) => void;
    enterBlankNode?: (ctx: BlankNodeContext) => void;
    exitBlankNode?: (ctx: BlankNodeContext) => void;
}