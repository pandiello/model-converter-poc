// Generated from .\Recognizer.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0014\u0083\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0007\u0010X\n\u0010\f\u0010\u000e\u0010[\u000b",
    "\u0010\u0003\u0011\u0006\u0011^\n\u0011\r\u0011\u000e\u0011_\u0003\u0011",
    "\u0003\u0011\u0007\u0011d\n\u0011\f\u0011\u000e\u0011g\u000b\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011k\n\u0011\u0003\u0011\u0003\u0011\u0006",
    "\u0011o\n\u0011\r\u0011\u000e\u0011p\u0005\u0011s\n\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012y\n\u0012\f\u0012\u000e",
    "\u0012|\u000b\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0002\u0002\u0014\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017",
    "\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\u0003\u0002\u0007\u0005\u0002C\\aac|\u0006\u00022;C\\aac|\u0003\u0002",
    "2;\u0005\u0002\f\f\u000f\u000f$$\u0005\u0002\u000b\f\u000f\u000f\"\"",
    "\u0002\u008a\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002",
    "\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002",
    "\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002",
    "\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002",
    "\u0002\u0003\'\u0003\u0002\u0002\u0002\u0005*\u0003\u0002\u0002\u0002",
    "\u0007-\u0003\u0002\u0002\u0002\t/\u0003\u0002\u0002\u0002\u000b6\u0003",
    "\u0002\u0002\u0002\r8\u0003\u0002\u0002\u0002\u000f:\u0003\u0002\u0002",
    "\u0002\u0011<\u0003\u0002\u0002\u0002\u0013>\u0003\u0002\u0002\u0002",
    "\u0015@\u0003\u0002\u0002\u0002\u0017B\u0003\u0002\u0002\u0002\u0019",
    "E\u0003\u0002\u0002\u0002\u001bJ\u0003\u0002\u0002\u0002\u001dQ\u0003",
    "\u0002\u0002\u0002\u001fU\u0003\u0002\u0002\u0002!r\u0003\u0002\u0002",
    "\u0002#t\u0003\u0002\u0002\u0002%\u007f\u0003\u0002\u0002\u0002\'(\u0007",
    "~\u0002\u0002()\u0007~\u0002\u0002)\u0004\u0003\u0002\u0002\u0002*+",
    "\u0007>\u0002\u0002+,\u0007?\u0002\u0002,\u0006\u0003\u0002\u0002\u0002",
    "-.\u0007/\u0002\u0002.\b\u0003\u0002\u0002\u0002/0\u0007G\u0002\u0002",
    "01\u0007s\u0002\u000212\u0007w\u0002\u000223\u0007c\u0002\u000234\u0007",
    "n\u0002\u000245\u0007u\u0002\u00025\n\u0003\u0002\u0002\u000267\u0007",
    "0\u0002\u00027\f\u0003\u0002\u0002\u000289\u0007=\u0002\u00029\u000e",
    "\u0003\u0002\u0002\u0002:;\u0007*\u0002\u0002;\u0010\u0003\u0002\u0002",
    "\u0002<=\u0007+\u0002\u0002=\u0012\u0003\u0002\u0002\u0002>?\u0007}",
    "\u0002\u0002?\u0014\u0003\u0002\u0002\u0002@A\u0007\u007f\u0002\u0002",
    "A\u0016\u0003\u0002\u0002\u0002BC\u0007k\u0002\u0002CD\u0007h\u0002",
    "\u0002D\u0018\u0003\u0002\u0002\u0002EF\u0007g\u0002\u0002FG\u0007n",
    "\u0002\u0002GH\u0007u\u0002\u0002HI\u0007g\u0002\u0002I\u001a\u0003",
    "\u0002\u0002\u0002JK\u0007t\u0002\u0002KL\u0007g\u0002\u0002LM\u0007",
    "v\u0002\u0002MN\u0007w\u0002\u0002NO\u0007t\u0002\u0002OP\u0007p\u0002",
    "\u0002P\u001c\u0003\u0002\u0002\u0002QR\u0007e\u0002\u0002RS\u0005\u000b",
    "\u0006\u0002ST\u0005\u001f\u0010\u0002T\u001e\u0003\u0002\u0002\u0002",
    "UY\t\u0002\u0002\u0002VX\t\u0003\u0002\u0002WV\u0003\u0002\u0002\u0002",
    "X[\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002",
    "\u0002Z \u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002\\^\t\u0004",
    "\u0002\u0002]\\\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_]",
    "\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002",
    "\u0002ae\u00070\u0002\u0002bd\t\u0004\u0002\u0002cb\u0003\u0002\u0002",
    "\u0002dg\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002\u0002ef\u0003\u0002",
    "\u0002\u0002fj\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002\u0002hi\u0007",
    "G\u0002\u0002ik\u00079\u0002\u0002jh\u0003\u0002\u0002\u0002jk\u0003",
    "\u0002\u0002\u0002ks\u0003\u0002\u0002\u0002ln\u00070\u0002\u0002mo",
    "\t\u0004\u0002\u0002nm\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002",
    "pn\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002qs\u0003\u0002\u0002",
    "\u0002r]\u0003\u0002\u0002\u0002rl\u0003\u0002\u0002\u0002s\"\u0003",
    "\u0002\u0002\u0002tz\u0007$\u0002\u0002uy\n\u0005\u0002\u0002vw\u0007",
    "$\u0002\u0002wy\u0007$\u0002\u0002xu\u0003\u0002\u0002\u0002xv\u0003",
    "\u0002\u0002\u0002y|\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002",
    "z{\u0003\u0002\u0002\u0002{}\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002",
    "\u0002}~\u0007$\u0002\u0002~$\u0003\u0002\u0002\u0002\u007f\u0080\t",
    "\u0006\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0082\b",
    "\u0013\u0002\u0002\u0082&\u0003\u0002\u0002\u0002\u000b\u0002Y_ejpr",
    "xz\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function RecognizerLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

RecognizerLexer.prototype = Object.create(antlr4.Lexer.prototype);
RecognizerLexer.prototype.constructor = RecognizerLexer;

Object.defineProperty(RecognizerLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

RecognizerLexer.EOF = antlr4.Token.EOF;
RecognizerLexer.OR = 1;
RecognizerLexer.LTEQ = 2;
RecognizerLexer.MINUS = 3;
RecognizerLexer.EQUALS = 4;
RecognizerLexer.DOT = 5;
RecognizerLexer.SCOL = 6;
RecognizerLexer.OPAR = 7;
RecognizerLexer.CPAR = 8;
RecognizerLexer.OBRACE = 9;
RecognizerLexer.CBRACE = 10;
RecognizerLexer.IF = 11;
RecognizerLexer.ELSE = 12;
RecognizerLexer.RETURN = 13;
RecognizerLexer.RETRYID = 14;
RecognizerLexer.ID = 15;
RecognizerLexer.FLOAT = 16;
RecognizerLexer.STRING = 17;
RecognizerLexer.SPACE = 18;

RecognizerLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

RecognizerLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

RecognizerLexer.prototype.literalNames = [ null, "'||'", "'<='", "'-'", 
                                           "'Equals'", "'.'", "';'", "'('", 
                                           "')'", "'{'", "'}'", "'if'", 
                                           "'else'", "'return'" ];

RecognizerLexer.prototype.symbolicNames = [ null, "OR", "LTEQ", "MINUS", 
                                            "EQUALS", "DOT", "SCOL", "OPAR", 
                                            "CPAR", "OBRACE", "CBRACE", 
                                            "IF", "ELSE", "RETURN", "RETRYID", 
                                            "ID", "FLOAT", "STRING", "SPACE" ];

RecognizerLexer.prototype.ruleNames = [ "OR", "LTEQ", "MINUS", "EQUALS", 
                                        "DOT", "SCOL", "OPAR", "CPAR", "OBRACE", 
                                        "CBRACE", "IF", "ELSE", "RETURN", 
                                        "RETRYID", "ID", "FLOAT", "STRING", 
                                        "SPACE" ];

RecognizerLexer.prototype.grammarFileName = "Recognizer.g4";



exports.RecognizerLexer = RecognizerLexer;

