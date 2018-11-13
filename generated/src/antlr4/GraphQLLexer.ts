// Generated from src/antlr4/GraphQL.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class GraphQLLexer extends Lexer {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly T__5=6;
	public static readonly T__6=7;
	public static readonly T__7=8;
	public static readonly T__8=9;
	public static readonly T__9=10;
	public static readonly T__10=11;
	public static readonly T__11=12;
	public static readonly T__12=13;
	public static readonly T__13=14;
	public static readonly T__14=15;
	public static readonly T__15=16;
	public static readonly T__16=17;
	public static readonly T__17=18;
	public static readonly T__18=19;
	public static readonly T__19=20;
	public static readonly T__20=21;
	public static readonly T__21=22;
	public static readonly T__22=23;
	public static readonly T__23=24;
	public static readonly T__24=25;
	public static readonly T__25=26;
	public static readonly T__26=27;
	public static readonly T__27=28;
	public static readonly T__28=29;
	public static readonly BOOLEAN=30;
	public static readonly NAMETYPE=31;
	public static readonly NAME=32;
	public static readonly STRING=33;
	public static readonly COMMENT=34;
	public static readonly NUMBER=35;
	public static readonly WS=36;
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE"
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "BOOLEAN", "NAMETYPE", "NAME", "STRING", 
		"COMMENT", "InputCharacter", "ESC", "UNICODE", "HEX", "NUMBER", "INT", 
		"EXP", "WS"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'{'", "','", "'}'", "'query'", "'mutation'", "'subscription'", 
		"':'", "'('", "')'", "'...'", "'on'", "'fragment'", "'scalar'", "'implements'", 
		"'@'", "'deprecated'", "'interface'", "'union'", "'='", "'|'", "'enum'", 
		"'input'", "'extend'", "'directive'", "'$'", "'['", "']'", "'!'", "'schema'", 
		undefined, "'type'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "BOOLEAN", "NAMETYPE", "NAME", "STRING", "COMMENT", 
		"NUMBER", "WS"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GraphQLLexer._LITERAL_NAMES, GraphQLLexer._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return GraphQLLexer.VOCABULARY;
	}


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(GraphQLLexer._ATN, this);
	}

	@Override
	public get grammarFileName(): string { return "GraphQL.g4"; }

	@Override
	public get ruleNames(): string[] { return GraphQLLexer.ruleNames; }

	@Override
	public get serializedATN(): string { return GraphQLLexer._serializedATN; }

	@Override
	public get modeNames(): string[] { return GraphQLLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02&\u0154\b\x01"+
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06"+
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r"+
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t"+
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t"+
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t"+
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t"+
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04"+
		"+\t+\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03"+
		"\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03"+
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03"+
		"\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03"+
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03"+
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03"+
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03"+
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03"+
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03"+
		"\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03"+
		"\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03"+
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03"+
		"\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03"+
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03"+
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03"+
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03"+
		"\x1F\x03\x1F\x05\x1F\xF7\n\x1F\x03 \x03 \x03 \x03 \x03 \x03!\x03!\x07"+
		"!\u0100\n!\f!\x0E!\u0103\v!\x03\"\x03\"\x03\"\x07\"\u0108\n\"\f\"\x0E"+
		"\"\u010B\v\"\x03\"\x03\"\x03#\x03#\x07#\u0111\n#\f#\x0E#\u0114\v#\x03"+
		"$\x03$\x03%\x03%\x03%\x05%\u011B\n%\x03&\x03&\x03&\x03&\x03&\x03&\x03"+
		"\'\x03\'\x03(\x05(\u0126\n(\x03(\x03(\x03(\x06(\u012B\n(\r(\x0E(\u012C"+
		"\x03(\x05(\u0130\n(\x03(\x05(\u0133\n(\x03(\x03(\x03(\x03(\x05(\u0139"+
		"\n(\x03(\x05(\u013C\n(\x03)\x03)\x03)\x07)\u0141\n)\f)\x0E)\u0144\v)\x05"+
		")\u0146\n)\x03*\x03*\x05*\u014A\n*\x03*\x03*\x03+\x06+\u014F\n+\r+\x0E"+
		"+\u0150\x03+\x03+\x02\x02\x02,\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02"+
		"\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02"+
		"\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%"+
		"\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B"+
		"5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02"+
		"\x02I\x02\x02K\x02\x02M\x02\x02O\x02%Q\x02\x02S\x02\x02U\x02&\x03\x02"+
		"\r\x05\x02C\\aac|\x06\x022;C\\aac|\x04\x02$$^^\x06\x02\f\f\x0F\x0F\x87"+
		"\x87\u202A\u202B\n\x02$$11^^ddhhppttvv\x05\x022;CHch\x03\x022;\x03\x02"+
		"3;\x04\x02GGgg\x04\x02--//\x05\x02\v\f\x0F\x0F\"\"\u015E\x02\x03\x03\x02"+
		"\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02"+
		"\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02"+
		"\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02"+
		"\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02"+
		"\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02"+
		"\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02"+
		")\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02"+
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02"+
		"\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03"+
		"\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02"+
		"\x02\x02E\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x03"+
		"W\x03\x02\x02\x02\x05Y\x03\x02\x02\x02\x07[\x03\x02\x02\x02\t]\x03\x02"+
		"\x02\x02\vc\x03\x02\x02\x02\rl\x03\x02\x02\x02\x0Fy\x03\x02\x02\x02\x11"+
		"{\x03\x02\x02\x02\x13}\x03\x02\x02\x02\x15\x7F\x03\x02\x02\x02\x17\x83"+
		"\x03\x02\x02\x02\x19\x86\x03\x02\x02\x02\x1B\x8F\x03\x02\x02\x02\x1D\x96"+
		"\x03\x02\x02\x02\x1F\xA1\x03\x02\x02\x02!\xA3\x03\x02\x02\x02#\xAE\x03"+
		"\x02\x02\x02%\xB8\x03\x02\x02\x02\'\xBE\x03\x02\x02\x02)\xC0\x03\x02\x02"+
		"\x02+\xC2\x03\x02\x02\x02-\xC7\x03\x02\x02\x02/\xCD\x03\x02\x02\x021\xD4"+
		"\x03\x02\x02\x023\xDE\x03\x02\x02\x025\xE0\x03\x02\x02\x027\xE2\x03\x02"+
		"\x02\x029\xE4\x03\x02\x02\x02;\xE6\x03\x02\x02\x02=\xF6\x03\x02\x02\x02"+
		"?\xF8\x03\x02\x02\x02A\xFD\x03\x02\x02\x02C\u0104\x03\x02\x02\x02E\u010E"+
		"\x03\x02\x02\x02G\u0115\x03\x02\x02\x02I\u0117\x03\x02\x02\x02K\u011C"+
		"\x03\x02\x02\x02M\u0122\x03\x02\x02\x02O\u013B\x03\x02\x02\x02Q\u0145"+
		"\x03\x02\x02\x02S\u0147\x03\x02\x02\x02U\u014E\x03\x02\x02\x02WX\x07}"+
		"\x02\x02X\x04\x03\x02\x02\x02YZ\x07.\x02\x02Z\x06\x03\x02\x02\x02[\\\x07"+
		"\x7F\x02\x02\\\b\x03\x02\x02\x02]^\x07s\x02\x02^_\x07w\x02\x02_`\x07g"+
		"\x02\x02`a\x07t\x02\x02ab\x07{\x02\x02b\n\x03\x02\x02\x02cd\x07o\x02\x02"+
		"de\x07w\x02\x02ef\x07v\x02\x02fg\x07c\x02\x02gh\x07v\x02\x02hi\x07k\x02"+
		"\x02ij\x07q\x02\x02jk\x07p\x02\x02k\f\x03\x02\x02\x02lm\x07u\x02\x02m"+
		"n\x07w\x02\x02no\x07d\x02\x02op\x07u\x02\x02pq\x07e\x02\x02qr\x07t\x02"+
		"\x02rs\x07k\x02\x02st\x07r\x02\x02tu\x07v\x02\x02uv\x07k\x02\x02vw\x07"+
		"q\x02\x02wx\x07p\x02\x02x\x0E\x03\x02\x02\x02yz\x07<\x02\x02z\x10\x03"+
		"\x02\x02\x02{|\x07*\x02\x02|\x12\x03\x02\x02\x02}~\x07+\x02\x02~\x14\x03"+
		"\x02\x02\x02\x7F\x80\x070\x02\x02\x80\x81\x070\x02\x02\x81\x82\x070\x02"+
		"\x02\x82\x16\x03\x02\x02\x02\x83\x84\x07q\x02\x02\x84\x85\x07p\x02\x02"+
		"\x85\x18\x03\x02\x02\x02\x86\x87\x07h\x02\x02\x87\x88\x07t\x02\x02\x88"+
		"\x89\x07c\x02\x02\x89\x8A\x07i\x02\x02\x8A\x8B\x07o\x02\x02\x8B\x8C\x07"+
		"g\x02\x02\x8C\x8D\x07p\x02\x02\x8D\x8E\x07v\x02\x02\x8E\x1A\x03\x02\x02"+
		"\x02\x8F\x90\x07u\x02\x02\x90\x91\x07e\x02\x02\x91\x92\x07c\x02\x02\x92"+
		"\x93\x07n\x02\x02\x93\x94\x07c\x02\x02\x94\x95\x07t\x02\x02\x95\x1C\x03"+
		"\x02\x02\x02\x96\x97\x07k\x02\x02\x97\x98\x07o\x02\x02\x98\x99\x07r\x02"+
		"\x02\x99\x9A\x07n\x02\x02\x9A\x9B\x07g\x02\x02\x9B\x9C\x07o\x02\x02\x9C"+
		"\x9D\x07g\x02\x02\x9D\x9E\x07p\x02\x02\x9E\x9F\x07v\x02\x02\x9F\xA0\x07"+
		"u\x02\x02\xA0\x1E\x03\x02\x02\x02\xA1\xA2\x07B\x02\x02\xA2 \x03\x02\x02"+
		"\x02\xA3\xA4\x07f\x02\x02\xA4\xA5\x07g\x02\x02\xA5\xA6\x07r\x02\x02\xA6"+
		"\xA7\x07t\x02\x02\xA7\xA8\x07g\x02\x02\xA8\xA9\x07e\x02\x02\xA9\xAA\x07"+
		"c\x02\x02\xAA\xAB\x07v\x02\x02\xAB\xAC\x07g\x02\x02\xAC\xAD\x07f\x02\x02"+
		"\xAD\"\x03\x02\x02\x02\xAE\xAF\x07k\x02\x02\xAF\xB0\x07p\x02\x02\xB0\xB1"+
		"\x07v\x02\x02\xB1\xB2\x07g\x02\x02\xB2\xB3\x07t\x02\x02\xB3\xB4\x07h\x02"+
		"\x02\xB4\xB5\x07c\x02\x02\xB5\xB6\x07e\x02\x02\xB6\xB7\x07g\x02\x02\xB7"+
		"$\x03\x02\x02\x02\xB8\xB9\x07w\x02\x02\xB9\xBA\x07p\x02\x02\xBA\xBB\x07"+
		"k\x02\x02\xBB\xBC\x07q\x02\x02\xBC\xBD\x07p\x02\x02\xBD&\x03\x02\x02\x02"+
		"\xBE\xBF\x07?\x02\x02\xBF(\x03\x02\x02\x02\xC0\xC1\x07~\x02\x02\xC1*\x03"+
		"\x02\x02\x02\xC2\xC3\x07g\x02\x02\xC3\xC4\x07p\x02\x02\xC4\xC5\x07w\x02"+
		"\x02\xC5\xC6\x07o\x02\x02\xC6,\x03\x02\x02\x02\xC7\xC8\x07k\x02\x02\xC8"+
		"\xC9\x07p\x02\x02\xC9\xCA\x07r\x02\x02\xCA\xCB\x07w\x02\x02\xCB\xCC\x07"+
		"v\x02\x02\xCC.\x03\x02\x02\x02\xCD\xCE\x07g\x02\x02\xCE\xCF\x07z\x02\x02"+
		"\xCF\xD0\x07v\x02\x02\xD0\xD1\x07g\x02\x02\xD1\xD2\x07p\x02\x02\xD2\xD3"+
		"\x07f\x02\x02\xD30\x03\x02\x02\x02\xD4\xD5\x07f\x02\x02\xD5\xD6\x07k\x02"+
		"\x02\xD6\xD7\x07t\x02\x02\xD7\xD8\x07g\x02\x02\xD8\xD9\x07e\x02\x02\xD9"+
		"\xDA\x07v\x02\x02\xDA\xDB\x07k\x02\x02\xDB\xDC\x07x\x02\x02\xDC\xDD\x07"+
		"g\x02\x02\xDD2\x03\x02\x02\x02\xDE\xDF\x07&\x02\x02\xDF4\x03\x02\x02\x02"+
		"\xE0\xE1\x07]\x02\x02\xE16\x03\x02\x02\x02\xE2\xE3\x07_\x02\x02\xE38\x03"+
		"\x02\x02\x02\xE4\xE5\x07#\x02\x02\xE5:\x03\x02\x02\x02\xE6\xE7\x07u\x02"+
		"\x02\xE7\xE8\x07e\x02\x02\xE8\xE9\x07j\x02\x02\xE9\xEA\x07g\x02\x02\xEA"+
		"\xEB\x07o\x02\x02\xEB\xEC\x07c\x02\x02\xEC<\x03\x02\x02\x02\xED\xEE\x07"+
		"v\x02\x02\xEE\xEF\x07t\x02\x02\xEF\xF0\x07w\x02\x02\xF0\xF7\x07g\x02\x02"+
		"\xF1\xF2\x07h\x02\x02\xF2\xF3\x07c\x02\x02\xF3\xF4\x07n\x02\x02\xF4\xF5"+
		"\x07u\x02\x02\xF5\xF7\x07g\x02\x02\xF6\xED\x03\x02\x02\x02\xF6\xF1\x03"+
		"\x02\x02\x02\xF7>\x03\x02\x02\x02\xF8\xF9\x07v\x02\x02\xF9\xFA\x07{\x02"+
		"\x02\xFA\xFB\x07r\x02\x02\xFB\xFC\x07g\x02\x02\xFC@\x03\x02\x02\x02\xFD"+
		"\u0101\t\x02\x02\x02\xFE\u0100\t\x03\x02\x02\xFF\xFE\x03\x02\x02\x02\u0100"+
		"\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02"+
		"\x02\u0102B\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0104\u0109\x07"+
		"$\x02\x02\u0105\u0108\x05I%\x02\u0106\u0108\n\x04\x02\x02\u0107\u0105"+
		"\x03\x02\x02\x02\u0107\u0106\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02"+
		"\u0109\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010C\x03"+
		"\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010C\u010D\x07$\x02\x02\u010D"+
		"D\x03\x02\x02\x02\u010E\u0112\x07%\x02\x02\u010F\u0111\x05G$\x02\u0110"+
		"\u010F\x03\x02\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02"+
		"\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113F\x03\x02\x02\x02\u0114\u0112"+
		"\x03\x02\x02\x02\u0115\u0116\n\x05\x02\x02\u0116H\x03\x02\x02\x02\u0117"+
		"\u011A\x07^\x02\x02\u0118\u011B\t\x06\x02\x02\u0119\u011B\x05K&\x02\u011A"+
		"\u0118\x03\x02\x02\x02\u011A\u0119\x03\x02\x02\x02\u011BJ\x03\x02\x02"+
		"\x02\u011C\u011D\x07w\x02\x02\u011D\u011E\x05M\'\x02\u011E\u011F\x05M"+
		"\'\x02\u011F\u0120\x05M\'\x02\u0120\u0121\x05M\'\x02\u0121L\x03\x02\x02"+
		"\x02\u0122\u0123\t\x07\x02\x02\u0123N\x03\x02\x02\x02\u0124\u0126\x07"+
		"/\x02\x02\u0125\u0124\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126"+
		"\u0127\x03\x02\x02\x02\u0127\u0128\x05Q)\x02\u0128\u012A\x070\x02\x02"+
		"\u0129\u012B\t\b\x02\x02\u012A\u0129\x03\x02\x02\x02\u012B\u012C\x03\x02"+
		"\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D"+
		"\u012F\x03\x02\x02\x02\u012E\u0130\x05S*\x02\u012F\u012E\x03\x02\x02\x02"+
		"\u012F\u0130\x03\x02\x02\x02\u0130\u013C\x03\x02\x02\x02\u0131\u0133\x07"+
		"/\x02\x02\u0132\u0131\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133"+
		"\u0134\x03\x02\x02\x02\u0134\u0135\x05Q)\x02\u0135\u0136\x05S*\x02\u0136"+
		"\u013C\x03\x02\x02\x02\u0137\u0139\x07/\x02\x02\u0138\u0137\x03\x02\x02"+
		"\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013C"+
		"\x05Q)\x02\u013B\u0125\x03\x02\x02\x02\u013B\u0132\x03\x02\x02\x02\u013B"+
		"\u0138\x03\x02\x02\x02\u013CP\x03\x02\x02\x02\u013D\u0146\x072\x02\x02"+
		"\u013E\u0142\t\t\x02\x02\u013F\u0141\t\b\x02\x02\u0140\u013F\x03\x02\x02"+
		"\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0143"+
		"\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02"+
		"\u0145\u013D\x03\x02\x02\x02\u0145\u013E\x03\x02\x02\x02\u0146R\x03\x02"+
		"\x02\x02\u0147\u0149\t\n\x02\x02\u0148\u014A\t\v\x02\x02\u0149\u0148\x03"+
		"\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B"+
		"\u014C\x05Q)\x02\u014CT\x03\x02\x02\x02\u014D\u014F\t\f\x02\x02\u014E"+
		"\u014D\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u014E\x03\x02"+
		"\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152"+
		"\u0153\b+\x02\x02\u0153V\x03\x02\x02\x02\x13\x02\xF6\u0101\u0107\u0109"+
		"\u0112\u011A\u0125\u012C\u012F\u0132\u0138\u013B\u0142\u0145\u0149\u0150"+
		"\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GraphQLLexer.__ATN) {
			GraphQLLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GraphQLLexer._serializedATN));
		}

		return GraphQLLexer.__ATN;
	}

}

