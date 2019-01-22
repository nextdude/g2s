// Generated from GraphQL.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class GraphQLLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly NAME = 49;
	public static readonly INT_VALUE = 50;
	public static readonly FLOAT_VALUE = 51;
	public static readonly STRING_VALUE = 52;
	public static readonly BOOLEAN_VALUE = 53;
	public static readonly NULL_VALUE = 54;
	public static readonly ENUM_VALUE = 55;
	public static readonly COMMENT = 56;
	public static readonly IGNORED = 57;
	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", 
		"T__41", "T__42", "T__43", "T__44", "T__45", "T__46", "T__47", "NAME", 
		"INT_VALUE", "INTEGER_PART", "NEGATIVE_SIGN", "DIGIT", "NON_ZERO_DIGIT", 
		"FLOAT_VALUE", "FRACTIONAL_PART", "EXPONENT_PART", "EXPONENT_INDICATOR", 
		"SIGN", "STRING_VALUE", "STRING_CHARACTER", "HEX", "ESCAPED_UNICODE", 
		"ESCAPED_CHARACTER", "BLOCK_STRING_CHARACTER", "BOOLEAN_VALUE", "NULL_VALUE", 
		"ENUM_VALUE", "COMMENT", "COMMENT_CHAR", "IGNORED",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'query'", "'mutation'", "'subscription'", "'{'", "'}'", "':'", 
		"'('", "')'", "'...'", "'fragment'", "'on'", "'['", "']'", "'$'", "'='", 
		"'!'", "'@'", "'schema'", "'extend'", "'scalar'", "'type'", "'implements'", 
		"'&'", "'interface'", "'union'", "'|'", "'enum'", "'input'", "'directive'", 
		"'QUERY'", "'MUTATION'", "'SUBSCRIPTION'", "'FIELD'", "'FRAGMENT_DEFINITION'", 
		"'FRAGMENT_SPREAD'", "'INLINE_FRAGMENT'", "'VARIABLE_DEFINITION'", "'SCHEMA'", 
		"'SCALAR'", "'OBJECT'", "'FIELD_DEFINITION'", "'ARGUMENT_DEFINITION'", 
		"'INTERFACE'", "'UNION'", "'ENUM'", "'ENUM_VALUE'", "'INPUT_OBJECT'", 
		"'INPUT_FIELD_DEFINITION'", undefined, undefined, undefined, undefined, 
		undefined, "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"NAME", "INT_VALUE", "FLOAT_VALUE", "STRING_VALUE", "BOOLEAN_VALUE", "NULL_VALUE", 
		"ENUM_VALUE", "COMMENT", "IGNORED",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GraphQLLexer._LITERAL_NAMES, GraphQLLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GraphQLLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(GraphQLLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "GraphQL.g4"; }

	// @Override
	public get ruleNames(): string[] { return GraphQLLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return GraphQLLexer._serializedATN; }

	// @Override
	public get modeNames(): string[] { return GraphQLLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02;\u029D\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)" +
		"\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x03" +
		"1\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x032\x032\x072\u020C" +
		"\n2\f2\x0E2\u020F\v2\x033\x033\x034\x054\u0214\n4\x034\x034\x054\u0218" +
		"\n4\x034\x034\x074\u021C\n4\f4\x0E4\u021F\v4\x054\u0221\n4\x035\x035\x03" +
		"6\x036\x037\x037\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x05" +
		"8\u0233\n8\x039\x039\x069\u0237\n9\r9\x0E9\u0238\x03:\x03:\x05:\u023D" +
		"\n:\x03:\x06:\u0240\n:\r:\x0E:\u0241\x03;\x03;\x03<\x03<\x03=\x03=\x07" +
		"=\u024A\n=\f=\x0E=\u024D\v=\x03=\x03=\x03=\x03=\x03=\x03=\x07=\u0255\n" +
		"=\f=\x0E=\u0258\v=\x03=\x03=\x03=\x05=\u025D\n=\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x05>\u0266\n>\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03A\x03" +
		"A\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u0278\nB\x03C\x03C\x03C\x03" +
		"C\x03C\x03C\x03C\x03C\x03C\x05C\u0283\nC\x03D\x03D\x03D\x03D\x03D\x03" +
		"E\x03E\x03F\x03F\x07F\u028E\nF\fF\x0EF\u0291\vF\x03F\x03F\x03G\x03G\x03" +
		"H\x06H\u0298\nH\rH\x0EH\u0299\x03H\x03H\x02\x02\x02I\x03\x02\x03\x05\x02" +
		"\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02" +
		"\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11" +
		"!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02" +
		"\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02" +
		"!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02," +
		"W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x02\x02i\x02\x02k\x02" +
		"\x02m\x02\x02o\x025q\x02\x02s\x02\x02u\x02\x02w\x02\x02y\x026{\x02\x02" +
		"}\x02\x02\x7F\x02\x02\x81\x02\x02\x83\x02\x02\x85\x027\x87\x028\x89\x02" +
		"9\x8B\x02:\x8D\x02\x02\x8F\x02;\x03\x02\x0E\x05\x02C\\aac|\x06\x022;C" +
		"\\aac|\x03\x022;\x03\x023;\x04\x02GGgg\x04\x02--//\x07\x02\f\f\x0E\x0F" +
		"$$))^^\x05\x022;CHch\n\x02$$))11ddhhppttvv\x05\x02$$))^^\x04\x02\f\f\x0E" +
		"\x0F\x07\x02\v\f\x0F\x0F\"\"..\uFF01\uFF01\u02A2\x02\x03\x03\x02\x02\x02" +
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
		"\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
		"\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02" +
		"\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02" +
		"#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03" +
		"\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02" +
		"\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x02" +
		"7\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02" +
		"\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02" +
		"\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03" +
		"\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02" +
		"\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02" +
		"Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02" +
		"\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02" +
		"\x02o\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02" +
		"\x87\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02" +
		"\x8F\x03\x02\x02\x02\x03\x91\x03\x02\x02\x02\x05\x97\x03\x02\x02\x02\x07" +
		"\xA0\x03\x02\x02\x02\t\xAD\x03\x02\x02\x02\v\xAF\x03\x02\x02\x02\r\xB1" +
		"\x03\x02\x02\x02\x0F\xB3\x03\x02\x02\x02\x11\xB5\x03\x02\x02\x02\x13\xB7" +
		"\x03\x02\x02\x02\x15\xBB\x03\x02\x02\x02\x17\xC4\x03\x02\x02\x02\x19\xC7" +
		"\x03\x02\x02\x02\x1B\xC9\x03\x02\x02\x02\x1D\xCB\x03\x02\x02\x02\x1F\xCD" +
		"\x03\x02\x02\x02!\xCF\x03\x02\x02\x02#\xD1\x03\x02\x02\x02%\xD3\x03\x02" +
		"\x02\x02\'\xDA\x03\x02\x02\x02)\xE1\x03\x02\x02\x02+\xE8\x03\x02\x02\x02" +
		"-\xED\x03\x02\x02\x02/\xF8\x03\x02\x02\x021\xFA\x03\x02\x02\x023\u0104" +
		"\x03\x02\x02\x025\u010A\x03\x02\x02\x027\u010C\x03\x02\x02\x029\u0111" +
		"\x03\x02\x02\x02;\u0117\x03\x02\x02\x02=\u0121\x03\x02\x02\x02?\u0127" +
		"\x03\x02\x02\x02A\u0130\x03\x02\x02\x02C\u013D\x03\x02\x02\x02E\u0143" +
		"\x03\x02\x02\x02G\u0157\x03\x02\x02\x02I\u0167\x03\x02\x02\x02K\u0177" +
		"\x03\x02\x02\x02M\u018B\x03\x02\x02\x02O\u0192\x03\x02\x02\x02Q\u0199" +
		"\x03\x02\x02\x02S\u01A0\x03\x02\x02\x02U\u01B1\x03\x02\x02\x02W\u01C5" +
		"\x03\x02\x02\x02Y\u01CF\x03\x02\x02\x02[\u01D5\x03\x02\x02\x02]\u01DA" +
		"\x03\x02\x02\x02_\u01E5\x03\x02\x02\x02a\u01F2\x03\x02\x02\x02c\u0209" +
		"\x03\x02\x02\x02e\u0210\x03\x02\x02\x02g\u0220\x03\x02\x02\x02i\u0222" +
		"\x03\x02\x02\x02k\u0224\x03\x02\x02\x02m\u0226\x03\x02\x02\x02o\u0232" +
		"\x03\x02\x02\x02q\u0234\x03\x02\x02\x02s\u023A\x03\x02\x02\x02u\u0243" +
		"\x03\x02\x02\x02w\u0245\x03\x02\x02\x02y\u025C\x03\x02\x02\x02{\u0265" +
		"\x03\x02\x02\x02}\u0267\x03\x02\x02\x02\x7F\u0269\x03\x02\x02\x02\x81" +
		"\u026E\x03\x02\x02\x02\x83\u0277\x03\x02\x02\x02\x85\u0282\x03\x02\x02" +
		"\x02\x87\u0284\x03\x02\x02\x02\x89\u0289\x03\x02\x02\x02\x8B\u028B\x03" +
		"\x02\x02\x02\x8D\u0294\x03\x02\x02\x02\x8F\u0297\x03\x02\x02\x02\x91\x92" +
		"\x07s\x02\x02\x92\x93\x07w\x02\x02\x93\x94\x07g\x02\x02\x94\x95\x07t\x02" +
		"\x02\x95\x96\x07{\x02\x02\x96\x04\x03\x02\x02\x02\x97\x98\x07o\x02\x02" +
		"\x98\x99\x07w\x02\x02\x99\x9A\x07v\x02\x02\x9A\x9B\x07c\x02\x02\x9B\x9C" +
		"\x07v\x02\x02\x9C\x9D\x07k\x02\x02\x9D\x9E\x07q\x02\x02\x9E\x9F\x07p\x02" +
		"\x02\x9F\x06\x03\x02\x02\x02\xA0\xA1\x07u\x02\x02\xA1\xA2\x07w\x02\x02" +
		"\xA2\xA3\x07d\x02\x02\xA3\xA4\x07u\x02\x02\xA4\xA5\x07e\x02\x02\xA5\xA6" +
		"\x07t\x02\x02\xA6\xA7\x07k\x02\x02\xA7\xA8\x07r\x02\x02\xA8\xA9\x07v\x02" +
		"\x02\xA9\xAA\x07k\x02\x02\xAA\xAB\x07q\x02\x02\xAB\xAC\x07p\x02\x02\xAC" +
		"\b\x03\x02\x02\x02\xAD\xAE\x07}\x02\x02\xAE\n\x03\x02\x02\x02\xAF\xB0" +
		"\x07\x7F\x02\x02\xB0\f\x03\x02\x02\x02\xB1\xB2\x07<\x02\x02\xB2\x0E\x03" +
		"\x02\x02\x02\xB3\xB4\x07*\x02\x02\xB4\x10\x03\x02\x02\x02\xB5\xB6\x07" +
		"+\x02\x02\xB6\x12\x03\x02\x02\x02\xB7\xB8\x070\x02\x02\xB8\xB9\x070\x02" +
		"\x02\xB9\xBA\x070\x02\x02\xBA\x14\x03\x02\x02\x02\xBB\xBC\x07h\x02\x02" +
		"\xBC\xBD\x07t\x02\x02\xBD\xBE\x07c\x02\x02\xBE\xBF\x07i\x02\x02\xBF\xC0" +
		"\x07o\x02\x02\xC0\xC1\x07g\x02\x02\xC1\xC2\x07p\x02\x02\xC2\xC3\x07v\x02" +
		"\x02\xC3\x16\x03\x02\x02\x02\xC4\xC5\x07q\x02\x02\xC5\xC6\x07p\x02\x02" +
		"\xC6\x18\x03\x02\x02\x02\xC7\xC8\x07]\x02\x02\xC8\x1A\x03\x02\x02\x02" +
		"\xC9\xCA\x07_\x02\x02\xCA\x1C\x03\x02\x02\x02\xCB\xCC\x07&\x02\x02\xCC" +
		"\x1E\x03\x02\x02\x02\xCD\xCE\x07?\x02\x02\xCE \x03\x02\x02\x02\xCF\xD0" +
		"\x07#\x02\x02\xD0\"\x03\x02\x02\x02\xD1\xD2\x07B\x02\x02\xD2$\x03\x02" +
		"\x02\x02\xD3\xD4\x07u\x02\x02\xD4\xD5\x07e\x02\x02\xD5\xD6\x07j\x02\x02" +
		"\xD6\xD7\x07g\x02\x02\xD7\xD8\x07o\x02\x02\xD8\xD9\x07c\x02\x02\xD9&\x03" +
		"\x02\x02\x02\xDA\xDB\x07g\x02\x02\xDB\xDC\x07z\x02\x02\xDC\xDD\x07v\x02" +
		"\x02\xDD\xDE\x07g\x02\x02\xDE\xDF\x07p\x02\x02\xDF\xE0\x07f\x02\x02\xE0" +
		"(\x03\x02\x02\x02\xE1\xE2\x07u\x02\x02\xE2\xE3\x07e\x02\x02\xE3\xE4\x07" +
		"c\x02\x02\xE4\xE5\x07n\x02\x02\xE5\xE6\x07c\x02\x02\xE6\xE7\x07t\x02\x02" +
		"\xE7*\x03\x02\x02\x02\xE8\xE9\x07v\x02\x02\xE9\xEA\x07{\x02\x02\xEA\xEB" +
		"\x07r\x02\x02\xEB\xEC\x07g\x02\x02\xEC,\x03\x02\x02\x02\xED\xEE\x07k\x02" +
		"\x02\xEE\xEF\x07o\x02\x02\xEF\xF0\x07r\x02\x02\xF0\xF1\x07n\x02\x02\xF1" +
		"\xF2\x07g\x02\x02\xF2\xF3\x07o\x02\x02\xF3\xF4\x07g\x02\x02\xF4\xF5\x07" +
		"p\x02\x02\xF5\xF6\x07v\x02\x02\xF6\xF7\x07u\x02\x02\xF7.\x03\x02\x02\x02" +
		"\xF8\xF9\x07(\x02\x02\xF90\x03\x02\x02\x02\xFA\xFB\x07k\x02\x02\xFB\xFC" +
		"\x07p\x02\x02\xFC\xFD\x07v\x02\x02\xFD\xFE\x07g\x02\x02\xFE\xFF\x07t\x02" +
		"\x02\xFF\u0100\x07h\x02\x02\u0100\u0101\x07c\x02\x02\u0101\u0102\x07e" +
		"\x02\x02\u0102\u0103\x07g\x02\x02\u01032\x03\x02\x02\x02\u0104\u0105\x07" +
		"w\x02\x02\u0105\u0106\x07p\x02\x02\u0106\u0107\x07k\x02\x02\u0107\u0108" +
		"\x07q\x02\x02\u0108\u0109\x07p\x02\x02\u01094\x03\x02\x02\x02\u010A\u010B" +
		"\x07~\x02\x02\u010B6\x03\x02\x02\x02\u010C\u010D\x07g\x02\x02\u010D\u010E" +
		"\x07p\x02\x02\u010E\u010F\x07w\x02\x02\u010F\u0110\x07o\x02\x02\u0110" +
		"8\x03\x02\x02\x02\u0111\u0112\x07k\x02\x02\u0112\u0113\x07p\x02\x02\u0113" +
		"\u0114\x07r\x02\x02\u0114\u0115\x07w\x02\x02\u0115\u0116\x07v\x02\x02" +
		"\u0116:\x03\x02\x02\x02\u0117\u0118\x07f\x02\x02\u0118\u0119\x07k\x02" +
		"\x02\u0119\u011A\x07t\x02\x02\u011A\u011B\x07g\x02\x02\u011B\u011C\x07" +
		"e\x02\x02\u011C\u011D\x07v\x02\x02\u011D\u011E\x07k\x02\x02\u011E\u011F" +
		"\x07x\x02\x02\u011F\u0120\x07g\x02\x02\u0120<\x03\x02\x02\x02\u0121\u0122" +
		"\x07S\x02\x02\u0122\u0123\x07W\x02\x02\u0123\u0124\x07G\x02\x02\u0124" +
		"\u0125\x07T\x02\x02\u0125\u0126\x07[\x02\x02\u0126>\x03\x02\x02\x02\u0127" +
		"\u0128\x07O\x02\x02\u0128\u0129\x07W\x02\x02\u0129\u012A\x07V\x02\x02" +
		"\u012A\u012B\x07C\x02\x02\u012B\u012C\x07V\x02\x02\u012C\u012D\x07K\x02" +
		"\x02\u012D\u012E\x07Q\x02\x02\u012E\u012F\x07P\x02\x02\u012F@\x03\x02" +
		"\x02\x02\u0130\u0131\x07U\x02\x02\u0131\u0132\x07W\x02\x02\u0132\u0133" +
		"\x07D\x02\x02\u0133\u0134\x07U\x02\x02\u0134\u0135\x07E\x02\x02\u0135" +
		"\u0136\x07T\x02\x02\u0136\u0137\x07K\x02\x02\u0137\u0138\x07R\x02\x02" +
		"\u0138\u0139\x07V\x02\x02\u0139\u013A\x07K\x02\x02\u013A\u013B\x07Q\x02" +
		"\x02\u013B\u013C\x07P\x02\x02\u013CB\x03\x02\x02\x02\u013D\u013E\x07H" +
		"\x02\x02\u013E\u013F\x07K\x02\x02\u013F\u0140\x07G\x02\x02\u0140\u0141" +
		"\x07N\x02\x02\u0141\u0142\x07F\x02\x02\u0142D\x03\x02\x02\x02\u0143\u0144" +
		"\x07H\x02\x02\u0144\u0145\x07T\x02\x02\u0145\u0146\x07C\x02\x02\u0146" +
		"\u0147\x07I\x02\x02\u0147\u0148\x07O\x02\x02\u0148\u0149\x07G\x02\x02" +
		"\u0149\u014A\x07P\x02\x02\u014A\u014B\x07V\x02\x02\u014B\u014C\x07a\x02" +
		"\x02\u014C\u014D\x07F\x02\x02\u014D\u014E\x07G\x02\x02\u014E\u014F\x07" +
		"H\x02\x02\u014F\u0150\x07K\x02\x02\u0150\u0151\x07P\x02\x02\u0151\u0152" +
		"\x07K\x02\x02\u0152\u0153\x07V\x02\x02\u0153\u0154\x07K\x02\x02\u0154" +
		"\u0155\x07Q\x02\x02\u0155\u0156\x07P\x02\x02\u0156F\x03\x02\x02\x02\u0157" +
		"\u0158\x07H\x02\x02\u0158\u0159\x07T\x02\x02\u0159\u015A\x07C\x02\x02" +
		"\u015A\u015B\x07I\x02\x02\u015B\u015C\x07O\x02\x02\u015C\u015D\x07G\x02" +
		"\x02\u015D\u015E\x07P\x02\x02\u015E\u015F\x07V\x02\x02\u015F\u0160\x07" +
		"a\x02\x02\u0160\u0161\x07U\x02\x02\u0161\u0162\x07R\x02\x02\u0162\u0163" +
		"\x07T\x02\x02\u0163\u0164\x07G\x02\x02\u0164\u0165\x07C\x02\x02\u0165" +
		"\u0166\x07F\x02\x02\u0166H\x03\x02\x02\x02\u0167\u0168\x07K\x02\x02\u0168" +
		"\u0169\x07P\x02\x02\u0169\u016A\x07N\x02\x02\u016A\u016B\x07K\x02\x02" +
		"\u016B\u016C\x07P\x02\x02\u016C\u016D\x07G\x02\x02\u016D\u016E\x07a\x02" +
		"\x02\u016E\u016F\x07H\x02\x02\u016F\u0170\x07T\x02\x02\u0170\u0171\x07" +
		"C\x02\x02\u0171\u0172\x07I\x02\x02\u0172\u0173\x07O\x02\x02\u0173\u0174" +
		"\x07G\x02\x02\u0174\u0175\x07P\x02\x02\u0175\u0176\x07V\x02\x02\u0176" +
		"J\x03\x02\x02\x02\u0177\u0178\x07X\x02\x02\u0178\u0179\x07C\x02\x02\u0179" +
		"\u017A\x07T\x02\x02\u017A\u017B\x07K\x02\x02\u017B\u017C\x07C\x02\x02" +
		"\u017C\u017D\x07D\x02\x02\u017D\u017E\x07N\x02\x02\u017E\u017F\x07G\x02" +
		"\x02\u017F\u0180\x07a\x02\x02\u0180\u0181\x07F\x02\x02\u0181\u0182\x07" +
		"G\x02\x02\u0182\u0183\x07H\x02\x02\u0183\u0184\x07K\x02\x02\u0184\u0185" +
		"\x07P\x02\x02\u0185\u0186\x07K\x02\x02\u0186\u0187\x07V\x02\x02\u0187" +
		"\u0188\x07K\x02\x02\u0188\u0189\x07Q\x02\x02\u0189\u018A\x07P\x02\x02" +
		"\u018AL\x03\x02\x02\x02\u018B\u018C\x07U\x02\x02\u018C\u018D\x07E\x02" +
		"\x02\u018D\u018E\x07J\x02\x02\u018E\u018F\x07G\x02\x02\u018F\u0190\x07" +
		"O\x02\x02\u0190\u0191\x07C\x02\x02\u0191N\x03\x02\x02\x02\u0192\u0193" +
		"\x07U\x02\x02\u0193\u0194\x07E\x02\x02\u0194\u0195\x07C\x02\x02\u0195" +
		"\u0196\x07N\x02\x02\u0196\u0197\x07C\x02\x02\u0197\u0198\x07T\x02\x02" +
		"\u0198P\x03\x02\x02\x02\u0199\u019A\x07Q\x02\x02\u019A\u019B\x07D\x02" +
		"\x02\u019B\u019C\x07L\x02\x02\u019C\u019D\x07G\x02\x02\u019D\u019E\x07" +
		"E\x02\x02\u019E\u019F\x07V\x02\x02\u019FR\x03\x02\x02\x02\u01A0\u01A1" +
		"\x07H\x02\x02\u01A1\u01A2\x07K\x02\x02\u01A2\u01A3\x07G\x02\x02\u01A3" +
		"\u01A4\x07N\x02\x02\u01A4\u01A5\x07F\x02\x02\u01A5\u01A6\x07a\x02\x02" +
		"\u01A6\u01A7\x07F\x02\x02\u01A7\u01A8\x07G\x02\x02\u01A8\u01A9\x07H\x02" +
		"\x02\u01A9\u01AA\x07K\x02\x02\u01AA\u01AB\x07P\x02\x02\u01AB\u01AC\x07" +
		"K\x02\x02\u01AC\u01AD\x07V\x02\x02\u01AD\u01AE\x07K\x02\x02\u01AE\u01AF" +
		"\x07Q\x02\x02\u01AF\u01B0\x07P\x02\x02\u01B0T\x03\x02\x02\x02\u01B1\u01B2" +
		"\x07C\x02\x02\u01B2\u01B3\x07T\x02\x02\u01B3\u01B4\x07I\x02\x02\u01B4" +
		"\u01B5\x07W\x02\x02\u01B5\u01B6\x07O\x02\x02\u01B6\u01B7\x07G\x02\x02" +
		"\u01B7\u01B8\x07P\x02\x02\u01B8\u01B9\x07V\x02\x02\u01B9\u01BA\x07a\x02" +
		"\x02\u01BA\u01BB\x07F\x02\x02\u01BB\u01BC\x07G\x02\x02\u01BC\u01BD\x07" +
		"H\x02\x02\u01BD\u01BE\x07K\x02\x02\u01BE\u01BF\x07P\x02\x02\u01BF\u01C0" +
		"\x07K\x02\x02\u01C0\u01C1\x07V\x02\x02\u01C1\u01C2\x07K\x02\x02\u01C2" +
		"\u01C3\x07Q\x02\x02\u01C3\u01C4\x07P\x02\x02\u01C4V\x03\x02\x02\x02\u01C5" +
		"\u01C6\x07K\x02\x02\u01C6\u01C7\x07P\x02\x02\u01C7\u01C8\x07V\x02\x02" +
		"\u01C8\u01C9\x07G\x02\x02\u01C9\u01CA\x07T\x02\x02\u01CA\u01CB\x07H\x02" +
		"\x02\u01CB\u01CC\x07C\x02\x02\u01CC\u01CD\x07E\x02\x02\u01CD\u01CE\x07" +
		"G\x02\x02\u01CEX\x03\x02\x02\x02\u01CF\u01D0\x07W\x02\x02\u01D0\u01D1" +
		"\x07P\x02\x02\u01D1\u01D2\x07K\x02\x02\u01D2\u01D3\x07Q\x02\x02\u01D3" +
		"\u01D4\x07P\x02\x02\u01D4Z\x03\x02\x02\x02\u01D5\u01D6\x07G\x02\x02\u01D6" +
		"\u01D7\x07P\x02\x02\u01D7\u01D8\x07W\x02\x02\u01D8\u01D9\x07O\x02\x02" +
		"\u01D9\\\x03\x02\x02\x02\u01DA\u01DB\x07G\x02\x02\u01DB\u01DC\x07P\x02" +
		"\x02\u01DC\u01DD\x07W\x02\x02\u01DD\u01DE\x07O\x02\x02\u01DE\u01DF\x07" +
		"a\x02\x02\u01DF\u01E0\x07X\x02\x02\u01E0\u01E1\x07C\x02\x02\u01E1\u01E2" +
		"\x07N\x02\x02\u01E2\u01E3\x07W\x02\x02\u01E3\u01E4\x07G\x02\x02\u01E4" +
		"^\x03\x02\x02\x02\u01E5\u01E6\x07K\x02\x02\u01E6\u01E7\x07P\x02\x02\u01E7" +
		"\u01E8\x07R\x02\x02\u01E8\u01E9\x07W\x02\x02\u01E9\u01EA\x07V\x02\x02" +
		"\u01EA\u01EB\x07a\x02\x02\u01EB\u01EC\x07Q\x02\x02\u01EC\u01ED\x07D\x02" +
		"\x02\u01ED\u01EE\x07L\x02\x02\u01EE\u01EF\x07G\x02\x02\u01EF\u01F0\x07" +
		"E\x02\x02\u01F0\u01F1\x07V\x02\x02\u01F1`\x03\x02\x02\x02\u01F2\u01F3" +
		"\x07K\x02\x02\u01F3\u01F4\x07P\x02\x02\u01F4\u01F5\x07R\x02\x02\u01F5" +
		"\u01F6\x07W\x02\x02\u01F6\u01F7\x07V\x02\x02\u01F7\u01F8\x07a\x02\x02" +
		"\u01F8\u01F9\x07H\x02\x02\u01F9\u01FA\x07K\x02\x02\u01FA\u01FB\x07G\x02" +
		"\x02\u01FB\u01FC\x07N\x02\x02\u01FC\u01FD\x07F\x02\x02\u01FD\u01FE\x07" +
		"a\x02\x02\u01FE\u01FF\x07F\x02\x02\u01FF\u0200\x07G\x02\x02\u0200\u0201" +
		"\x07H\x02\x02\u0201\u0202\x07K\x02\x02\u0202\u0203\x07P\x02\x02\u0203" +
		"\u0204\x07K\x02\x02\u0204\u0205\x07V\x02\x02\u0205\u0206\x07K\x02\x02" +
		"\u0206\u0207\x07Q\x02\x02\u0207\u0208\x07P\x02\x02\u0208b\x03\x02\x02" +
		"\x02\u0209\u020D\t\x02\x02\x02\u020A\u020C\t\x03\x02\x02\u020B\u020A\x03" +
		"\x02\x02\x02\u020C\u020F\x03\x02\x02\x02\u020D\u020B\x03\x02\x02\x02\u020D" +
		"\u020E\x03\x02\x02\x02\u020Ed\x03\x02\x02\x02\u020F\u020D\x03\x02\x02" +
		"\x02\u0210\u0211\x05g4\x02\u0211f\x03\x02\x02\x02\u0212\u0214\x05i5\x02" +
		"\u0213\u0212\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0215\x03" +
		"\x02\x02\x02\u0215\u0221\x072\x02\x02\u0216\u0218\x05i5\x02\u0217\u0216" +
		"\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02" +
		"\u0219\u021D\x05m7\x02\u021A\u021C\x05k6\x02\u021B\u021A\x03\x02\x02\x02" +
		"\u021C\u021F\x03\x02\x02\x02\u021D\u021B\x03\x02\x02\x02\u021D\u021E\x03" +
		"\x02\x02\x02\u021E\u0221\x03\x02\x02\x02\u021F\u021D\x03\x02\x02\x02\u0220" +
		"\u0213\x03\x02\x02\x02\u0220\u0217\x03\x02\x02\x02\u0221h\x03\x02\x02" +
		"\x02\u0222\u0223\x07/\x02\x02\u0223j\x03\x02\x02\x02\u0224\u0225\t\x04" +
		"\x02\x02\u0225l\x03\x02\x02\x02\u0226\u0227\t\x05\x02\x02\u0227n\x03\x02" +
		"\x02\x02\u0228\u0229\x05g4\x02\u0229\u022A\x05q9\x02\u022A\u0233\x03\x02" +
		"\x02\x02\u022B\u022C\x05g4\x02\u022C\u022D\x05s:\x02\u022D\u0233\x03\x02" +
		"\x02\x02\u022E\u022F\x05g4\x02\u022F\u0230\x05q9\x02\u0230\u0231\x05s" +
		":\x02\u0231\u0233\x03\x02\x02\x02\u0232\u0228\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0232\u022B\x03\x02\x02\x02\u0232\u022E\x03\x02\x02\x02\u0233p\x03\x02" +
		"\x02\x02\u0234\u0236\x070\x02\x02\u0235\u0237\x05k6\x02\u0236\u0235\x03" +
		"\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\u0236\x03\x02\x02\x02\u0238" +
		"\u0239\x03\x02\x02\x02\u0239r\x03\x02\x02\x02\u023A\u023C\x05u;\x02\u023B" +
		"\u023D\x05w<\x02\u023C\u023B\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02" +
		"\u023D\u023F\x03\x02\x02\x02\u023E\u0240\x05k6\x02\u023F\u023E\x03\x02" +
		"\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02\u0241" +
		"\u0242\x03\x02\x02\x02\u0242t\x03\x02\x02\x02\u0243\u0244\t\x06\x02\x02" +
		"\u0244v\x03\x02\x02\x02\u0245\u0246\t\x07\x02\x02\u0246x\x03\x02\x02\x02" +
		"\u0247\u024B\x07$\x02\x02\u0248\u024A\x05{>\x02\u0249\u0248\x03\x02\x02" +
		"\x02\u024A\u024D\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024B\u024C" +
		"\x03\x02\x02\x02\u024C\u024E\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02" +
		"\u024E\u025D\x07$\x02\x02\u024F\u0250\x07$\x02\x02\u0250\u0251\x07$\x02" +
		"\x02\u0251\u0252\x07$\x02\x02\u0252\u0256\x03\x02\x02\x02\u0253\u0255" +
		"\x05\x83B\x02\u0254\u0253\x03\x02\x02\x02\u0255\u0258\x03\x02\x02\x02" +
		"\u0256\u0254\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u0259\x03" +
		"\x02\x02\x02\u0258\u0256\x03\x02\x02\x02\u0259\u025A\x07$\x02\x02\u025A" +
		"\u025B\x07$\x02\x02\u025B\u025D\x07$\x02\x02\u025C\u0247\x03\x02\x02\x02" +
		"\u025C\u024F\x03\x02\x02\x02\u025Dz\x03\x02\x02\x02\u025E\u0266\n\b\x02" +
		"\x02\u025F\u0260\x07^\x02\x02\u0260\u0261\x07w\x02\x02\u0261\u0262\x03" +
		"\x02\x02\x02\u0262\u0266\x05\x7F@\x02\u0263\u0264\x07^\x02\x02\u0264\u0266" +
		"\x05\x81A\x02\u0265\u025E\x03\x02\x02\x02\u0265\u025F\x03\x02\x02\x02" +
		"\u0265\u0263\x03\x02\x02\x02\u0266|\x03\x02\x02\x02\u0267\u0268\t\t\x02" +
		"\x02\u0268~\x03\x02\x02\x02\u0269\u026A\x05}?\x02\u026A\u026B\x05}?\x02" +
		"\u026B\u026C\x05}?\x02\u026C\u026D\x05}?\x02\u026D\x80\x03\x02\x02\x02" +
		"\u026E\u026F\t\n\x02\x02\u026F\x82\x03\x02\x02\x02\u0270\u0278\n\v\x02" +
		"\x02\u0271\u0272\x07^\x02\x02\u0272\u0273\x07w\x02\x02\u0273\u0274\x03" +
		"\x02\x02\x02\u0274\u0278\x05\x7F@\x02\u0275\u0276\x07^\x02\x02\u0276\u0278" +
		"\x05\x81A\x02\u0277\u0270\x03\x02\x02\x02\u0277\u0271\x03\x02\x02\x02" +
		"\u0277\u0275\x03\x02\x02\x02\u0278\x84\x03\x02\x02\x02\u0279\u027A\x07" +
		"v\x02\x02\u027A\u027B\x07t\x02\x02\u027B\u027C\x07w\x02\x02\u027C\u0283" +
		"\x07g\x02\x02\u027D\u027E\x07h\x02\x02\u027E\u027F\x07c\x02\x02\u027F" +
		"\u0280\x07n\x02\x02\u0280\u0281\x07u\x02\x02\u0281\u0283\x07g\x02\x02" +
		"\u0282\u0279\x03\x02\x02\x02\u0282\u027D\x03\x02\x02\x02\u0283\x86\x03" +
		"\x02\x02\x02\u0284\u0285\x07p\x02\x02\u0285\u0286\x07w\x02\x02\u0286\u0287" +
		"\x07n\x02\x02\u0287\u0288\x07n\x02\x02\u0288\x88\x03\x02\x02\x02\u0289" +
		"\u028A\x05c2\x02\u028A\x8A\x03\x02\x02\x02\u028B\u028F\x07%\x02\x02\u028C" +
		"\u028E\x05\x8DG\x02\u028D\u028C\x03\x02\x02\x02\u028E\u0291\x03\x02\x02" +
		"\x02\u028F\u028D\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0292" +
		"\x03\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0292\u0293\bF\x02\x02\u0293" +
		"\x8C\x03\x02\x02\x02\u0294\u0295\n\f\x02\x02\u0295\x8E\x03\x02\x02\x02" +
		"\u0296\u0298\t\r\x02\x02\u0297\u0296\x03\x02\x02\x02\u0298\u0299\x03\x02" +
		"\x02\x02\u0299\u0297\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A" +
		"\u029B\x03\x02\x02\x02\u029B\u029C\bH\x02\x02\u029C\x90\x03\x02\x02\x02" +
		"\x14\x02\u020D\u0213\u0217\u021D\u0220\u0232\u0238\u023C\u0241\u024B\u0256" +
		"\u025C\u0265\u0277\u0282\u028F\u0299\x03\b\x02\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			GraphQLLexer._serializedATNSegment0,
			GraphQLLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GraphQLLexer.__ATN) {
			GraphQLLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GraphQLLexer._serializedATN));
		}

		return GraphQLLexer.__ATN;
	}

}

