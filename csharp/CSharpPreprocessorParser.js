// Generated from .\CSharpPreprocessorParser.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import CSharpPreprocessorParserListener from './CSharpPreprocessorParserListener.js';
import CSharpPreprocessorParserBase from './CSharpPreprocessorParserBase.js';

const serializedATN = [4,1,198,128,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,1,0,1,
0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,38,8,0,1,0,1,0,3,0,42,8,0,1,0,
1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,59,8,0,1,0,1,
0,1,0,1,0,1,0,3,0,66,8,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
1,0,3,0,81,8,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,3,2,101,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,123,8,2,10,2,12,2,126,9,2,1,2,0,1,
4,3,0,2,4,0,1,1,1,196,196,149,0,80,1,0,0,0,2,82,1,0,0,0,4,100,1,0,0,0,6,
7,5,183,0,0,7,8,5,195,0,0,8,9,3,2,1,0,9,10,6,0,-1,0,10,81,1,0,0,0,11,12,
5,184,0,0,12,13,5,195,0,0,13,14,3,2,1,0,14,15,6,0,-1,0,15,81,1,0,0,0,16,
17,5,52,0,0,17,18,3,4,2,0,18,19,3,2,1,0,19,20,6,0,-1,0,20,81,1,0,0,0,21,
22,5,185,0,0,22,23,3,4,2,0,23,24,3,2,1,0,24,25,6,0,-1,0,25,81,1,0,0,0,26,
27,5,36,0,0,27,28,3,2,1,0,28,29,6,0,-1,0,29,81,1,0,0,0,30,31,5,186,0,0,31,
32,3,2,1,0,32,33,6,0,-1,0,33,81,1,0,0,0,34,41,5,187,0,0,35,37,5,182,0,0,
36,38,5,91,0,0,37,36,1,0,0,0,37,38,1,0,0,0,38,42,1,0,0,0,39,42,5,30,0,0,
40,42,5,194,0,0,41,35,1,0,0,0,41,39,1,0,0,0,41,40,1,0,0,0,42,43,1,0,0,0,
43,44,3,2,1,0,44,45,6,0,-1,0,45,81,1,0,0,0,46,47,5,188,0,0,47,48,5,197,0,
0,48,49,3,2,1,0,49,50,6,0,-1,0,50,81,1,0,0,0,51,52,5,189,0,0,52,53,5,197,
0,0,53,54,3,2,1,0,54,55,6,0,-1,0,55,81,1,0,0,0,56,58,5,190,0,0,57,59,5,197,
0,0,58,57,1,0,0,0,58,59,1,0,0,0,59,60,1,0,0,0,60,61,3,2,1,0,61,62,6,0,-1,
0,62,81,1,0,0,0,63,65,5,191,0,0,64,66,5,197,0,0,65,64,1,0,0,0,65,66,1,0,
0,0,66,67,1,0,0,0,67,68,3,2,1,0,68,69,6,0,-1,0,69,81,1,0,0,0,70,71,5,192,
0,0,71,72,5,197,0,0,72,73,3,2,1,0,73,74,6,0,-1,0,74,81,1,0,0,0,75,76,5,193,
0,0,76,77,5,197,0,0,77,78,3,2,1,0,78,79,6,0,-1,0,79,81,1,0,0,0,80,6,1,0,
0,0,80,11,1,0,0,0,80,16,1,0,0,0,80,21,1,0,0,0,80,26,1,0,0,0,80,30,1,0,0,
0,80,34,1,0,0,0,80,46,1,0,0,0,80,51,1,0,0,0,80,56,1,0,0,0,80,63,1,0,0,0,
80,70,1,0,0,0,80,75,1,0,0,0,81,1,1,0,0,0,82,83,7,0,0,0,83,3,1,0,0,0,84,85,
6,2,-1,0,85,86,5,96,0,0,86,101,6,2,-1,0,87,88,5,42,0,0,88,101,6,2,-1,0,89,
90,5,195,0,0,90,101,6,2,-1,0,91,92,5,129,0,0,92,93,3,4,2,0,93,94,5,130,0,
0,94,95,6,2,-1,0,95,101,1,0,0,0,96,97,5,143,0,0,97,98,3,4,2,5,98,99,6,2,
-1,0,99,101,1,0,0,0,100,84,1,0,0,0,100,87,1,0,0,0,100,89,1,0,0,0,100,91,
1,0,0,0,100,96,1,0,0,0,101,124,1,0,0,0,102,103,10,4,0,0,103,104,5,156,0,
0,104,105,3,4,2,5,105,106,6,2,-1,0,106,123,1,0,0,0,107,108,10,3,0,0,108,
109,5,157,0,0,109,110,3,4,2,4,110,111,6,2,-1,0,111,123,1,0,0,0,112,113,10,
2,0,0,113,114,5,153,0,0,114,115,3,4,2,3,115,116,6,2,-1,0,116,123,1,0,0,0,
117,118,10,1,0,0,118,119,5,154,0,0,119,120,3,4,2,2,120,121,6,2,-1,0,121,
123,1,0,0,0,122,102,1,0,0,0,122,107,1,0,0,0,122,112,1,0,0,0,122,117,1,0,
0,0,123,126,1,0,0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,5,1,0,0,0,126,124,
1,0,0,0,8,37,41,58,65,80,100,122,124];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CSharpPreprocessorParser extends CSharpPreprocessorParserBase {

    static grammarFileName = "CSharpPreprocessorParser.g4";
    static literalNames = [ null, "'\\u00EF\\u00BB\\u00BF'", null, "'/***/'", 
                            null, null, null, null, "'#'", "'abstract'", 
                            "'add'", "'alias'", "'__arglist'", "'as'", "'ascending'", 
                            "'async'", "'await'", "'base'", "'bool'", "'break'", 
                            "'by'", "'byte'", "'case'", "'catch'", "'char'", 
                            "'checked'", "'class'", "'const'", "'continue'", 
                            "'decimal'", "'default'", "'delegate'", "'descending'", 
                            "'do'", "'double'", "'dynamic'", "'else'", "'enum'", 
                            "'equals'", "'event'", "'explicit'", "'extern'", 
                            "'false'", "'finally'", "'fixed'", "'float'", 
                            "'for'", "'foreach'", "'from'", "'get'", "'goto'", 
                            "'group'", "'if'", "'implicit'", "'in'", "'int'", 
                            "'interface'", "'internal'", "'into'", "'is'", 
                            "'join'", "'let'", "'lock'", "'long'", "'nameof'", 
                            "'namespace'", "'new'", "'null'", "'object'", 
                            "'on'", "'operator'", "'orderby'", "'out'", 
                            "'override'", "'params'", "'partial'", "'private'", 
                            "'protected'", "'public'", "'readonly'", "'ref'", 
                            "'remove'", "'return'", "'sbyte'", "'sealed'", 
                            "'select'", "'set'", "'short'", "'sizeof'", 
                            "'stackalloc'", "'static'", "'string'", "'struct'", 
                            "'switch'", "'this'", "'throw'", "'true'", "'try'", 
                            "'typeof'", "'uint'", "'ulong'", "'unchecked'", 
                            "'unmanaged'", "'unsafe'", "'ushort'", "'using'", 
                            "'var'", "'virtual'", "'void'", "'volatile'", 
                            "'when'", "'where'", "'while'", "'yield'", null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'{'", "'}'", "'['", "']'", "'('", 
                            "')'", "'.'", "','", "':'", "';'", "'+'", "'-'", 
                            "'*'", "'/'", "'%'", "'&'", "'|'", "'^'", "'!'", 
                            "'~'", "'='", "'<'", "'>'", "'?'", "'::'", "'??'", 
                            "'++'", "'--'", "'&&'", "'||'", "'->'", "'=='", 
                            "'!='", "'<='", "'>='", "'+='", "'-='", "'*='", 
                            "'/='", "'%='", "'&='", "'|='", "'^='", "'<<'", 
                            "'<<='", "'??='", "'..'", "'{{'", null, null, 
                            null, null, null, null, null, null, null, null, 
                            "'define'", "'undef'", "'elif'", "'endif'", 
                            "'line'", null, null, null, null, null, null, 
                            "'hidden'", null, null, null, "'}}'" ];
    static symbolicNames = [ null, "BYTE_ORDER_MARK", "SINGLE_LINE_DOC_COMMENT", 
                             "EMPTY_DELIMITED_DOC_COMMENT", "DELIMITED_DOC_COMMENT", 
                             "SINGLE_LINE_COMMENT", "DELIMITED_COMMENT", 
                             "WHITESPACES", "SHARP", "ABSTRACT", "ADD", 
                             "ALIAS", "ARGLIST", "AS", "ASCENDING", "ASYNC", 
                             "AWAIT", "BASE", "BOOL", "BREAK", "BY", "BYTE", 
                             "CASE", "CATCH", "CHAR", "CHECKED", "CLASS", 
                             "CONST", "CONTINUE", "DECIMAL", "DEFAULT", 
                             "DELEGATE", "DESCENDING", "DO", "DOUBLE", "DYNAMIC", 
                             "ELSE", "ENUM", "EQUALS", "EVENT", "EXPLICIT", 
                             "EXTERN", "FALSE", "FINALLY", "FIXED", "FLOAT", 
                             "FOR", "FOREACH", "FROM", "GET", "GOTO", "GROUP", 
                             "IF", "IMPLICIT", "IN", "INT", "INTERFACE", 
                             "INTERNAL", "INTO", "IS", "JOIN", "LET", "LOCK", 
                             "LONG", "NAMEOF", "NAMESPACE", "NEW", "NULL_", 
                             "OBJECT", "ON", "OPERATOR", "ORDERBY", "OUT", 
                             "OVERRIDE", "PARAMS", "PARTIAL", "PRIVATE", 
                             "PROTECTED", "PUBLIC", "READONLY", "REF", "REMOVE", 
                             "RETURN", "SBYTE", "SEALED", "SELECT", "SET", 
                             "SHORT", "SIZEOF", "STACKALLOC", "STATIC", 
                             "STRING", "STRUCT", "SWITCH", "THIS", "THROW", 
                             "TRUE", "TRY", "TYPEOF", "UINT", "ULONG", "UNCHECKED", 
                             "UNMANAGED", "UNSAFE", "USHORT", "USING", "VAR", 
                             "VIRTUAL", "VOID", "VOLATILE", "WHEN", "WHERE", 
                             "WHILE", "YIELD", "IDENTIFIER", "LITERAL_ACCESS", 
                             "INTEGER_LITERAL", "HEX_INTEGER_LITERAL", "BIN_INTEGER_LITERAL", 
                             "REAL_LITERAL", "CHARACTER_LITERAL", "REGULAR_STRING", 
                             "VERBATIUM_STRING", "INTERPOLATED_REGULAR_STRING_START", 
                             "INTERPOLATED_VERBATIUM_STRING_START", "OPEN_BRACE", 
                             "CLOSE_BRACE", "OPEN_BRACKET", "CLOSE_BRACKET", 
                             "OPEN_PARENS", "CLOSE_PARENS", "DOT", "COMMA", 
                             "COLON", "SEMICOLON", "PLUS", "MINUS", "STAR", 
                             "DIV", "PERCENT", "AMP", "BITWISE_OR", "CARET", 
                             "BANG", "TILDE", "ASSIGNMENT", "LT", "GT", 
                             "INTERR", "DOUBLE_COLON", "OP_COALESCING", 
                             "OP_INC", "OP_DEC", "OP_AND", "OP_OR", "OP_PTR", 
                             "OP_EQ", "OP_NE", "OP_LE", "OP_GE", "OP_ADD_ASSIGNMENT", 
                             "OP_SUB_ASSIGNMENT", "OP_MULT_ASSIGNMENT", 
                             "OP_DIV_ASSIGNMENT", "OP_MOD_ASSIGNMENT", "OP_AND_ASSIGNMENT", 
                             "OP_OR_ASSIGNMENT", "OP_XOR_ASSIGNMENT", "OP_LEFT_SHIFT", 
                             "OP_LEFT_SHIFT_ASSIGNMENT", "OP_COALESCING_ASSIGNMENT", 
                             "OP_RANGE", "DOUBLE_CURLY_INSIDE", "OPEN_BRACE_INSIDE", 
                             "REGULAR_CHAR_INSIDE", "VERBATIUM_DOUBLE_QUOTE_INSIDE", 
                             "DOUBLE_QUOTE_INSIDE", "REGULAR_STRING_INSIDE", 
                             "VERBATIUM_INSIDE_STRING", "CLOSE_BRACE_INSIDE", 
                             "FORMAT_STRING", "DIRECTIVE_WHITESPACES", "DIGITS", 
                             "DEFINE", "UNDEF", "ELIF", "ENDIF", "LINE", 
                             "ERROR", "WARNING", "REGION", "ENDREGION", 
                             "PRAGMA", "NULLABLE", "DIRECTIVE_HIDDEN", "CONDITIONAL_SYMBOL", 
                             "DIRECTIVE_NEW_LINE", "TEXT", "DOUBLE_CURLY_CLOSE_INSIDE" ];
    static ruleNames = [ "preprocessor_directive", "directive_new_line_or_sharp", 
                         "preprocessor_expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CSharpPreprocessorParser.ruleNames;
        this.literalNames = CSharpPreprocessorParser.literalNames;
        this.symbolicNames = CSharpPreprocessorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.preprocessor_expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    preprocessor_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 3);
    		case 2:
    			return this.precpred(this._ctx, 2);
    		case 3:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	preprocessor_directive() {
	    let localctx = new Preprocessor_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CSharpPreprocessorParser.RULE_preprocessor_directive);
	    var _la = 0;
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 183:
	            localctx = new PreprocessorDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 6;
	            this.match(CSharpPreprocessorParser.DEFINE);
	            this.state = 7;
	            this.match(CSharpPreprocessorParser.CONDITIONAL_SYMBOL);
	            this.state = 8;
	            this.directive_new_line_or_sharp();
	             this.OnPreprocessorDirectiveDefine(); 
	            break;
	        case 184:
	            localctx = new PreprocessorDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 11;
	            this.match(CSharpPreprocessorParser.UNDEF);
	            this.state = 12;
	            this.match(CSharpPreprocessorParser.CONDITIONAL_SYMBOL);
	            this.state = 13;
	            this.directive_new_line_or_sharp();
	             this.OnPreprocessorDirectiveUndef(); 
	            break;
	        case 52:
	            localctx = new PreprocessorConditionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 16;
	            this.match(CSharpPreprocessorParser.IF);
	            this.state = 17;
	            localctx.expr = this.preprocessor_expression(0);
	            this.state = 18;
	            this.directive_new_line_or_sharp();
	             this.OnPreprocessorDirectiveIf(); 
	            break;
	        case 185:
	            localctx = new PreprocessorConditionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 21;
	            this.match(CSharpPreprocessorParser.ELIF);
	            this.state = 22;
	            localctx.expr = this.preprocessor_expression(0);
	            this.state = 23;
	            this.directive_new_line_or_sharp();
	             this.OnPreprocessorDirectiveElif(); 
	            break;
	        case 36:
	            localctx = new PreprocessorConditionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 26;
	            this.match(CSharpPreprocessorParser.ELSE);
	            this.state = 27;
	            this.directive_new_line_or_sharp();
	             this.OnPreprocessorDirectiveElse(); 
	            break;
	        case 186:
	            localctx = new PreprocessorConditionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 30;
	            this.match(CSharpPreprocessorParser.ENDIF);
	            this.state = 31;
	            this.directive_new_line_or_sharp();
	             this.OnPreprocessorDirectiveEndif(); 
	            break;
	        case 187:
	            localctx = new PreprocessorLineContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 34;
	            this.match(CSharpPreprocessorParser.LINE);
	            this.state = 41;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 182:
	                this.state = 35;
	                this.match(CSharpPreprocessorParser.DIGITS);
	                this.state = 37;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===91) {
	                    this.state = 36;
	                    this.match(CSharpPreprocessorParser.STRING);
	                }

	                break;
	            case 30:
	                this.state = 39;
	                this.match(CSharpPreprocessorParser.DEFAULT);
	                break;
	            case 194:
	                this.state = 40;
	                this.match(CSharpPreprocessorParser.DIRECTIVE_HIDDEN);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 43;
	            this.directive_new_line_or_sharp();
	             this.OnPreprocessorDirectiveLine(); 
	            break;
	        case 188:
	            localctx = new PreprocessorDiagnosticContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 46;
	            this.match(CSharpPreprocessorParser.ERROR);
	            this.state = 47;
	            this.match(CSharpPreprocessorParser.TEXT);
	            this.state = 48;
	            this.directive_new_line_or_sharp();
	             this.OnPreprocessorDirectiveError(); 
	            break;
	        case 189:
	            localctx = new PreprocessorDiagnosticContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 51;
	            this.match(CSharpPreprocessorParser.WARNING);
	            this.state = 52;
	            this.match(CSharpPreprocessorParser.TEXT);
	            this.state = 53;
	            this.directive_new_line_or_sharp();
	             this.OnPreprocessorDirectiveWarning(); 
	            break;
	        case 190:
	            localctx = new PreprocessorRegionContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 56;
	            this.match(CSharpPreprocessorParser.REGION);
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===197) {
	                this.state = 57;
	                this.match(CSharpPreprocessorParser.TEXT);
	            }

	            this.state = 60;
	            this.directive_new_line_or_sharp();
	             this.OnPreprocessorDirectiveRegion(); 
	            break;
	        case 191:
	            localctx = new PreprocessorRegionContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 63;
	            this.match(CSharpPreprocessorParser.ENDREGION);
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===197) {
	                this.state = 64;
	                this.match(CSharpPreprocessorParser.TEXT);
	            }

	            this.state = 67;
	            this.directive_new_line_or_sharp();
	             this.OnPreprocessorDirectiveEndregion(); 
	            break;
	        case 192:
	            localctx = new PreprocessorPragmaContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 70;
	            this.match(CSharpPreprocessorParser.PRAGMA);
	            this.state = 71;
	            this.match(CSharpPreprocessorParser.TEXT);
	            this.state = 72;
	            this.directive_new_line_or_sharp();
	             this.OnPreprocessorDirectivePragma(); 
	            break;
	        case 193:
	            localctx = new PreprocessorNullableContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 75;
	            this.match(CSharpPreprocessorParser.NULLABLE);
	            this.state = 76;
	            this.match(CSharpPreprocessorParser.TEXT);
	            this.state = 77;
	            this.directive_new_line_or_sharp();
	             this.OnPreprocessorDirectiveNullable(); 
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	directive_new_line_or_sharp() {
	    let localctx = new Directive_new_line_or_sharpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CSharpPreprocessorParser.RULE_directive_new_line_or_sharp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        _la = this._input.LA(1);
	        if(!(_la===-1 || _la===196)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	preprocessor_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Preprocessor_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, CSharpPreprocessorParser.RULE_preprocessor_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 96:
	            this.state = 85;
	            this.match(CSharpPreprocessorParser.TRUE);
	             this.OnPreprocessorExpressionTrue(); 
	            break;
	        case 42:
	            this.state = 87;
	            this.match(CSharpPreprocessorParser.FALSE);
	             this.OnPreprocessorExpressionFalse(); 
	            break;
	        case 195:
	            this.state = 89;
	            this.match(CSharpPreprocessorParser.CONDITIONAL_SYMBOL);
	             this.OnPreprocessorExpressionConditionalSymbol(); 
	            break;
	        case 129:
	            this.state = 91;
	            this.match(CSharpPreprocessorParser.OPEN_PARENS);
	            this.state = 92;
	            localctx.expr = this.preprocessor_expression(0);
	            this.state = 93;
	            this.match(CSharpPreprocessorParser.CLOSE_PARENS);
	             this.OnPreprocessorExpressionConditionalOpenParens(); 
	            break;
	        case 143:
	            this.state = 96;
	            this.match(CSharpPreprocessorParser.BANG);
	            this.state = 97;
	            localctx.expr = this.preprocessor_expression(5);
	             this.OnPreprocessorExpressionConditionalBang(); 
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 124;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 122;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Preprocessor_expressionContext(this, _parentctx, _parentState);
	                    localctx.expr1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
	                    this.state = 102;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 103;
	                    this.match(CSharpPreprocessorParser.OP_EQ);
	                    this.state = 104;
	                    localctx.expr2 = this.preprocessor_expression(5);
	                     this.OnPreprocessorExpressionConditionalEq(); 
	                    break;

	                case 2:
	                    localctx = new Preprocessor_expressionContext(this, _parentctx, _parentState);
	                    localctx.expr1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
	                    this.state = 107;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 108;
	                    this.match(CSharpPreprocessorParser.OP_NE);
	                    this.state = 109;
	                    localctx.expr2 = this.preprocessor_expression(4);
	                     this.OnPreprocessorExpressionConditionalNe(); 
	                    break;

	                case 3:
	                    localctx = new Preprocessor_expressionContext(this, _parentctx, _parentState);
	                    localctx.expr1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
	                    this.state = 112;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 113;
	                    this.match(CSharpPreprocessorParser.OP_AND);
	                    this.state = 114;
	                    localctx.expr2 = this.preprocessor_expression(3);
	                     this.OnPreprocessorExpressionConditionalAnd(); 
	                    break;

	                case 4:
	                    localctx = new Preprocessor_expressionContext(this, _parentctx, _parentState);
	                    localctx.expr1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
	                    this.state = 117;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 118;
	                    this.match(CSharpPreprocessorParser.OP_OR);
	                    this.state = 119;
	                    localctx.expr2 = this.preprocessor_expression(2);
	                     this.OnPreprocessorExpressionConditionalOr(); 
	                    break;

	                } 
	            }
	            this.state = 126;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

CSharpPreprocessorParser.EOF = antlr4.Token.EOF;
CSharpPreprocessorParser.BYTE_ORDER_MARK = 1;
CSharpPreprocessorParser.SINGLE_LINE_DOC_COMMENT = 2;
CSharpPreprocessorParser.EMPTY_DELIMITED_DOC_COMMENT = 3;
CSharpPreprocessorParser.DELIMITED_DOC_COMMENT = 4;
CSharpPreprocessorParser.SINGLE_LINE_COMMENT = 5;
CSharpPreprocessorParser.DELIMITED_COMMENT = 6;
CSharpPreprocessorParser.WHITESPACES = 7;
CSharpPreprocessorParser.SHARP = 8;
CSharpPreprocessorParser.ABSTRACT = 9;
CSharpPreprocessorParser.ADD = 10;
CSharpPreprocessorParser.ALIAS = 11;
CSharpPreprocessorParser.ARGLIST = 12;
CSharpPreprocessorParser.AS = 13;
CSharpPreprocessorParser.ASCENDING = 14;
CSharpPreprocessorParser.ASYNC = 15;
CSharpPreprocessorParser.AWAIT = 16;
CSharpPreprocessorParser.BASE = 17;
CSharpPreprocessorParser.BOOL = 18;
CSharpPreprocessorParser.BREAK = 19;
CSharpPreprocessorParser.BY = 20;
CSharpPreprocessorParser.BYTE = 21;
CSharpPreprocessorParser.CASE = 22;
CSharpPreprocessorParser.CATCH = 23;
CSharpPreprocessorParser.CHAR = 24;
CSharpPreprocessorParser.CHECKED = 25;
CSharpPreprocessorParser.CLASS = 26;
CSharpPreprocessorParser.CONST = 27;
CSharpPreprocessorParser.CONTINUE = 28;
CSharpPreprocessorParser.DECIMAL = 29;
CSharpPreprocessorParser.DEFAULT = 30;
CSharpPreprocessorParser.DELEGATE = 31;
CSharpPreprocessorParser.DESCENDING = 32;
CSharpPreprocessorParser.DO = 33;
CSharpPreprocessorParser.DOUBLE = 34;
CSharpPreprocessorParser.DYNAMIC = 35;
CSharpPreprocessorParser.ELSE = 36;
CSharpPreprocessorParser.ENUM = 37;
CSharpPreprocessorParser.EQUALS = 38;
CSharpPreprocessorParser.EVENT = 39;
CSharpPreprocessorParser.EXPLICIT = 40;
CSharpPreprocessorParser.EXTERN = 41;
CSharpPreprocessorParser.FALSE = 42;
CSharpPreprocessorParser.FINALLY = 43;
CSharpPreprocessorParser.FIXED = 44;
CSharpPreprocessorParser.FLOAT = 45;
CSharpPreprocessorParser.FOR = 46;
CSharpPreprocessorParser.FOREACH = 47;
CSharpPreprocessorParser.FROM = 48;
CSharpPreprocessorParser.GET = 49;
CSharpPreprocessorParser.GOTO = 50;
CSharpPreprocessorParser.GROUP = 51;
CSharpPreprocessorParser.IF = 52;
CSharpPreprocessorParser.IMPLICIT = 53;
CSharpPreprocessorParser.IN = 54;
CSharpPreprocessorParser.INT = 55;
CSharpPreprocessorParser.INTERFACE = 56;
CSharpPreprocessorParser.INTERNAL = 57;
CSharpPreprocessorParser.INTO = 58;
CSharpPreprocessorParser.IS = 59;
CSharpPreprocessorParser.JOIN = 60;
CSharpPreprocessorParser.LET = 61;
CSharpPreprocessorParser.LOCK = 62;
CSharpPreprocessorParser.LONG = 63;
CSharpPreprocessorParser.NAMEOF = 64;
CSharpPreprocessorParser.NAMESPACE = 65;
CSharpPreprocessorParser.NEW = 66;
CSharpPreprocessorParser.NULL_ = 67;
CSharpPreprocessorParser.OBJECT = 68;
CSharpPreprocessorParser.ON = 69;
CSharpPreprocessorParser.OPERATOR = 70;
CSharpPreprocessorParser.ORDERBY = 71;
CSharpPreprocessorParser.OUT = 72;
CSharpPreprocessorParser.OVERRIDE = 73;
CSharpPreprocessorParser.PARAMS = 74;
CSharpPreprocessorParser.PARTIAL = 75;
CSharpPreprocessorParser.PRIVATE = 76;
CSharpPreprocessorParser.PROTECTED = 77;
CSharpPreprocessorParser.PUBLIC = 78;
CSharpPreprocessorParser.READONLY = 79;
CSharpPreprocessorParser.REF = 80;
CSharpPreprocessorParser.REMOVE = 81;
CSharpPreprocessorParser.RETURN = 82;
CSharpPreprocessorParser.SBYTE = 83;
CSharpPreprocessorParser.SEALED = 84;
CSharpPreprocessorParser.SELECT = 85;
CSharpPreprocessorParser.SET = 86;
CSharpPreprocessorParser.SHORT = 87;
CSharpPreprocessorParser.SIZEOF = 88;
CSharpPreprocessorParser.STACKALLOC = 89;
CSharpPreprocessorParser.STATIC = 90;
CSharpPreprocessorParser.STRING = 91;
CSharpPreprocessorParser.STRUCT = 92;
CSharpPreprocessorParser.SWITCH = 93;
CSharpPreprocessorParser.THIS = 94;
CSharpPreprocessorParser.THROW = 95;
CSharpPreprocessorParser.TRUE = 96;
CSharpPreprocessorParser.TRY = 97;
CSharpPreprocessorParser.TYPEOF = 98;
CSharpPreprocessorParser.UINT = 99;
CSharpPreprocessorParser.ULONG = 100;
CSharpPreprocessorParser.UNCHECKED = 101;
CSharpPreprocessorParser.UNMANAGED = 102;
CSharpPreprocessorParser.UNSAFE = 103;
CSharpPreprocessorParser.USHORT = 104;
CSharpPreprocessorParser.USING = 105;
CSharpPreprocessorParser.VAR = 106;
CSharpPreprocessorParser.VIRTUAL = 107;
CSharpPreprocessorParser.VOID = 108;
CSharpPreprocessorParser.VOLATILE = 109;
CSharpPreprocessorParser.WHEN = 110;
CSharpPreprocessorParser.WHERE = 111;
CSharpPreprocessorParser.WHILE = 112;
CSharpPreprocessorParser.YIELD = 113;
CSharpPreprocessorParser.IDENTIFIER = 114;
CSharpPreprocessorParser.LITERAL_ACCESS = 115;
CSharpPreprocessorParser.INTEGER_LITERAL = 116;
CSharpPreprocessorParser.HEX_INTEGER_LITERAL = 117;
CSharpPreprocessorParser.BIN_INTEGER_LITERAL = 118;
CSharpPreprocessorParser.REAL_LITERAL = 119;
CSharpPreprocessorParser.CHARACTER_LITERAL = 120;
CSharpPreprocessorParser.REGULAR_STRING = 121;
CSharpPreprocessorParser.VERBATIUM_STRING = 122;
CSharpPreprocessorParser.INTERPOLATED_REGULAR_STRING_START = 123;
CSharpPreprocessorParser.INTERPOLATED_VERBATIUM_STRING_START = 124;
CSharpPreprocessorParser.OPEN_BRACE = 125;
CSharpPreprocessorParser.CLOSE_BRACE = 126;
CSharpPreprocessorParser.OPEN_BRACKET = 127;
CSharpPreprocessorParser.CLOSE_BRACKET = 128;
CSharpPreprocessorParser.OPEN_PARENS = 129;
CSharpPreprocessorParser.CLOSE_PARENS = 130;
CSharpPreprocessorParser.DOT = 131;
CSharpPreprocessorParser.COMMA = 132;
CSharpPreprocessorParser.COLON = 133;
CSharpPreprocessorParser.SEMICOLON = 134;
CSharpPreprocessorParser.PLUS = 135;
CSharpPreprocessorParser.MINUS = 136;
CSharpPreprocessorParser.STAR = 137;
CSharpPreprocessorParser.DIV = 138;
CSharpPreprocessorParser.PERCENT = 139;
CSharpPreprocessorParser.AMP = 140;
CSharpPreprocessorParser.BITWISE_OR = 141;
CSharpPreprocessorParser.CARET = 142;
CSharpPreprocessorParser.BANG = 143;
CSharpPreprocessorParser.TILDE = 144;
CSharpPreprocessorParser.ASSIGNMENT = 145;
CSharpPreprocessorParser.LT = 146;
CSharpPreprocessorParser.GT = 147;
CSharpPreprocessorParser.INTERR = 148;
CSharpPreprocessorParser.DOUBLE_COLON = 149;
CSharpPreprocessorParser.OP_COALESCING = 150;
CSharpPreprocessorParser.OP_INC = 151;
CSharpPreprocessorParser.OP_DEC = 152;
CSharpPreprocessorParser.OP_AND = 153;
CSharpPreprocessorParser.OP_OR = 154;
CSharpPreprocessorParser.OP_PTR = 155;
CSharpPreprocessorParser.OP_EQ = 156;
CSharpPreprocessorParser.OP_NE = 157;
CSharpPreprocessorParser.OP_LE = 158;
CSharpPreprocessorParser.OP_GE = 159;
CSharpPreprocessorParser.OP_ADD_ASSIGNMENT = 160;
CSharpPreprocessorParser.OP_SUB_ASSIGNMENT = 161;
CSharpPreprocessorParser.OP_MULT_ASSIGNMENT = 162;
CSharpPreprocessorParser.OP_DIV_ASSIGNMENT = 163;
CSharpPreprocessorParser.OP_MOD_ASSIGNMENT = 164;
CSharpPreprocessorParser.OP_AND_ASSIGNMENT = 165;
CSharpPreprocessorParser.OP_OR_ASSIGNMENT = 166;
CSharpPreprocessorParser.OP_XOR_ASSIGNMENT = 167;
CSharpPreprocessorParser.OP_LEFT_SHIFT = 168;
CSharpPreprocessorParser.OP_LEFT_SHIFT_ASSIGNMENT = 169;
CSharpPreprocessorParser.OP_COALESCING_ASSIGNMENT = 170;
CSharpPreprocessorParser.OP_RANGE = 171;
CSharpPreprocessorParser.DOUBLE_CURLY_INSIDE = 172;
CSharpPreprocessorParser.OPEN_BRACE_INSIDE = 173;
CSharpPreprocessorParser.REGULAR_CHAR_INSIDE = 174;
CSharpPreprocessorParser.VERBATIUM_DOUBLE_QUOTE_INSIDE = 175;
CSharpPreprocessorParser.DOUBLE_QUOTE_INSIDE = 176;
CSharpPreprocessorParser.REGULAR_STRING_INSIDE = 177;
CSharpPreprocessorParser.VERBATIUM_INSIDE_STRING = 178;
CSharpPreprocessorParser.CLOSE_BRACE_INSIDE = 179;
CSharpPreprocessorParser.FORMAT_STRING = 180;
CSharpPreprocessorParser.DIRECTIVE_WHITESPACES = 181;
CSharpPreprocessorParser.DIGITS = 182;
CSharpPreprocessorParser.DEFINE = 183;
CSharpPreprocessorParser.UNDEF = 184;
CSharpPreprocessorParser.ELIF = 185;
CSharpPreprocessorParser.ENDIF = 186;
CSharpPreprocessorParser.LINE = 187;
CSharpPreprocessorParser.ERROR = 188;
CSharpPreprocessorParser.WARNING = 189;
CSharpPreprocessorParser.REGION = 190;
CSharpPreprocessorParser.ENDREGION = 191;
CSharpPreprocessorParser.PRAGMA = 192;
CSharpPreprocessorParser.NULLABLE = 193;
CSharpPreprocessorParser.DIRECTIVE_HIDDEN = 194;
CSharpPreprocessorParser.CONDITIONAL_SYMBOL = 195;
CSharpPreprocessorParser.DIRECTIVE_NEW_LINE = 196;
CSharpPreprocessorParser.TEXT = 197;
CSharpPreprocessorParser.DOUBLE_CURLY_CLOSE_INSIDE = 198;

CSharpPreprocessorParser.RULE_preprocessor_directive = 0;
CSharpPreprocessorParser.RULE_directive_new_line_or_sharp = 1;
CSharpPreprocessorParser.RULE_preprocessor_expression = 2;

class Preprocessor_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSharpPreprocessorParser.RULE_preprocessor_directive;
        this.value = null
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
			this.value = ctx.value;
		}

}


class PreprocessorDiagnosticContext extends Preprocessor_directiveContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ERROR() {
	    return this.getToken(CSharpPreprocessorParser.ERROR, 0);
	};

	TEXT() {
	    return this.getToken(CSharpPreprocessorParser.TEXT, 0);
	};

	directive_new_line_or_sharp() {
	    return this.getTypedRuleContext(Directive_new_line_or_sharpContext,0);
	};

	WARNING() {
	    return this.getToken(CSharpPreprocessorParser.WARNING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.enterPreprocessorDiagnostic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.exitPreprocessorDiagnostic(this);
		}
	}


}

CSharpPreprocessorParser.PreprocessorDiagnosticContext = PreprocessorDiagnosticContext;

class PreprocessorNullableContext extends Preprocessor_directiveContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NULLABLE() {
	    return this.getToken(CSharpPreprocessorParser.NULLABLE, 0);
	};

	TEXT() {
	    return this.getToken(CSharpPreprocessorParser.TEXT, 0);
	};

	directive_new_line_or_sharp() {
	    return this.getTypedRuleContext(Directive_new_line_or_sharpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.enterPreprocessorNullable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.exitPreprocessorNullable(this);
		}
	}


}

CSharpPreprocessorParser.PreprocessorNullableContext = PreprocessorNullableContext;

class PreprocessorRegionContext extends Preprocessor_directiveContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	REGION() {
	    return this.getToken(CSharpPreprocessorParser.REGION, 0);
	};

	directive_new_line_or_sharp() {
	    return this.getTypedRuleContext(Directive_new_line_or_sharpContext,0);
	};

	TEXT() {
	    return this.getToken(CSharpPreprocessorParser.TEXT, 0);
	};

	ENDREGION() {
	    return this.getToken(CSharpPreprocessorParser.ENDREGION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.enterPreprocessorRegion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.exitPreprocessorRegion(this);
		}
	}


}

CSharpPreprocessorParser.PreprocessorRegionContext = PreprocessorRegionContext;

class PreprocessorDeclarationContext extends Preprocessor_directiveContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEFINE() {
	    return this.getToken(CSharpPreprocessorParser.DEFINE, 0);
	};

	CONDITIONAL_SYMBOL() {
	    return this.getToken(CSharpPreprocessorParser.CONDITIONAL_SYMBOL, 0);
	};

	directive_new_line_or_sharp() {
	    return this.getTypedRuleContext(Directive_new_line_or_sharpContext,0);
	};

	UNDEF() {
	    return this.getToken(CSharpPreprocessorParser.UNDEF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.enterPreprocessorDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.exitPreprocessorDeclaration(this);
		}
	}


}

CSharpPreprocessorParser.PreprocessorDeclarationContext = PreprocessorDeclarationContext;

class PreprocessorConditionalContext extends Preprocessor_directiveContext {

    constructor(parser, ctx) {
        super(parser);
        this.expr = null;;
        super.copyFrom(ctx);
    }

	IF() {
	    return this.getToken(CSharpPreprocessorParser.IF, 0);
	};

	directive_new_line_or_sharp() {
	    return this.getTypedRuleContext(Directive_new_line_or_sharpContext,0);
	};

	preprocessor_expression() {
	    return this.getTypedRuleContext(Preprocessor_expressionContext,0);
	};

	ELIF() {
	    return this.getToken(CSharpPreprocessorParser.ELIF, 0);
	};

	ELSE() {
	    return this.getToken(CSharpPreprocessorParser.ELSE, 0);
	};

	ENDIF() {
	    return this.getToken(CSharpPreprocessorParser.ENDIF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.enterPreprocessorConditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.exitPreprocessorConditional(this);
		}
	}


}

CSharpPreprocessorParser.PreprocessorConditionalContext = PreprocessorConditionalContext;

class PreprocessorPragmaContext extends Preprocessor_directiveContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PRAGMA() {
	    return this.getToken(CSharpPreprocessorParser.PRAGMA, 0);
	};

	TEXT() {
	    return this.getToken(CSharpPreprocessorParser.TEXT, 0);
	};

	directive_new_line_or_sharp() {
	    return this.getTypedRuleContext(Directive_new_line_or_sharpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.enterPreprocessorPragma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.exitPreprocessorPragma(this);
		}
	}


}

CSharpPreprocessorParser.PreprocessorPragmaContext = PreprocessorPragmaContext;

class PreprocessorLineContext extends Preprocessor_directiveContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LINE() {
	    return this.getToken(CSharpPreprocessorParser.LINE, 0);
	};

	directive_new_line_or_sharp() {
	    return this.getTypedRuleContext(Directive_new_line_or_sharpContext,0);
	};

	DIGITS() {
	    return this.getToken(CSharpPreprocessorParser.DIGITS, 0);
	};

	DEFAULT() {
	    return this.getToken(CSharpPreprocessorParser.DEFAULT, 0);
	};

	DIRECTIVE_HIDDEN() {
	    return this.getToken(CSharpPreprocessorParser.DIRECTIVE_HIDDEN, 0);
	};

	STRING() {
	    return this.getToken(CSharpPreprocessorParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.enterPreprocessorLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.exitPreprocessorLine(this);
		}
	}


}

CSharpPreprocessorParser.PreprocessorLineContext = PreprocessorLineContext;

class Directive_new_line_or_sharpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSharpPreprocessorParser.RULE_directive_new_line_or_sharp;
    }

	DIRECTIVE_NEW_LINE() {
	    return this.getToken(CSharpPreprocessorParser.DIRECTIVE_NEW_LINE, 0);
	};

	EOF() {
	    return this.getToken(CSharpPreprocessorParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.enterDirective_new_line_or_sharp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.exitDirective_new_line_or_sharp(this);
		}
	}


}



class Preprocessor_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSharpPreprocessorParser.RULE_preprocessor_expression;
        this.value = null
        this.expr1 = null;
        this.expr = null;
        this.expr2 = null;
    }

	TRUE() {
	    return this.getToken(CSharpPreprocessorParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(CSharpPreprocessorParser.FALSE, 0);
	};

	CONDITIONAL_SYMBOL() {
	    return this.getToken(CSharpPreprocessorParser.CONDITIONAL_SYMBOL, 0);
	};

	OPEN_PARENS() {
	    return this.getToken(CSharpPreprocessorParser.OPEN_PARENS, 0);
	};

	CLOSE_PARENS() {
	    return this.getToken(CSharpPreprocessorParser.CLOSE_PARENS, 0);
	};

	preprocessor_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Preprocessor_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Preprocessor_expressionContext,i);
	    }
	};

	BANG() {
	    return this.getToken(CSharpPreprocessorParser.BANG, 0);
	};

	OP_EQ() {
	    return this.getToken(CSharpPreprocessorParser.OP_EQ, 0);
	};

	OP_NE() {
	    return this.getToken(CSharpPreprocessorParser.OP_NE, 0);
	};

	OP_AND() {
	    return this.getToken(CSharpPreprocessorParser.OP_AND, 0);
	};

	OP_OR() {
	    return this.getToken(CSharpPreprocessorParser.OP_OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.enterPreprocessor_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSharpPreprocessorParserListener ) {
	        listener.exitPreprocessor_expression(this);
		}
	}


}




CSharpPreprocessorParser.Preprocessor_directiveContext = Preprocessor_directiveContext; 
CSharpPreprocessorParser.Directive_new_line_or_sharpContext = Directive_new_line_or_sharpContext; 
CSharpPreprocessorParser.Preprocessor_expressionContext = Preprocessor_expressionContext; 
