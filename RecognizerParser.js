// Generated from .\Recognizer.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RecognizerListener = require('./RecognizerListener').RecognizerListener;
var grammarFileName = "Recognizer.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0014F\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006\'",
    "\n\u0006\u0003\u0006\u0003\u0006\u0005\u0006+\n\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u00070\n\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u00074\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bA\n\b\f\b\u000e\bD\u000b\b",
    "\u0003\b\u0002\u0003\u000e\t\u0002\u0004\u0006\b\n\f\u000e\u0002\u0002",
    "\u0002D\u0002\u0010\u0003\u0002\u0002\u0002\u0004\u0013\u0003\u0002",
    "\u0002\u0002\u0006\u0018\u0003\u0002\u0002\u0002\b\u001b\u0003\u0002",
    "\u0002\u0002\n*\u0003\u0002\u0002\u0002\f3\u0003\u0002\u0002\u0002\u000e",
    "5\u0003\u0002\u0002\u0002\u0010\u0011\u0005\u0004\u0003\u0002\u0011",
    "\u0012\u0007\u0002\u0002\u0003\u0012\u0003\u0003\u0002\u0002\u0002\u0013",
    "\u0014\u0007\r\u0002\u0002\u0014\u0015\u0005\u0006\u0004\u0002\u0015",
    "\u0016\u0007\u000e\u0002\u0002\u0016\u0017\u0005\n\u0006\u0002\u0017",
    "\u0005\u0003\u0002\u0002\u0002\u0018\u0019\u0005\b\u0005\u0002\u0019",
    "\u001a\u0005\n\u0006\u0002\u001a\u0007\u0003\u0002\u0002\u0002\u001b",
    "\u001c\u0007\t\u0002\u0002\u001c\u001d\u0005\f\u0007\u0002\u001d\u001e",
    "\u0007\n\u0002\u0002\u001e\t\u0003\u0002\u0002\u0002\u001f \u0007\u000b",
    "\u0002\u0002 !\u0005\n\u0006\u0002!\"\u0007\f\u0002\u0002\"+\u0003\u0002",
    "\u0002\u0002#+\u0005\u0004\u0003\u0002$&\u0007\u000f\u0002\u0002%\'",
    "\u0007\u0005\u0002\u0002&%\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002",
    "\u0002\'(\u0003\u0002\u0002\u0002()\u0007\u0012\u0002\u0002)+\u0007",
    "\b\u0002\u0002*\u001f\u0003\u0002\u0002\u0002*#\u0003\u0002\u0002\u0002",
    "*$\u0003\u0002\u0002\u0002+\u000b\u0003\u0002\u0002\u0002,-\u0007\u0010",
    "\u0002\u0002-/\u0007\u0004\u0002\u0002.0\u0007\u0005\u0002\u0002/.\u0003",
    "\u0002\u0002\u0002/0\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u0002",
    "14\u0007\u0012\u0002\u000224\u0005\u000e\b\u00023,\u0003\u0002\u0002",
    "\u000232\u0003\u0002\u0002\u00024\r\u0003\u0002\u0002\u000256\b\b\u0001",
    "\u000267\u0007\u0010\u0002\u000278\u0007\u0007\u0002\u000289\u0007\u0006",
    "\u0002\u00029:\u0007\t\u0002\u0002:;\u0007\u0013\u0002\u0002;<\u0007",
    "\n\u0002\u0002<B\u0003\u0002\u0002\u0002=>\f\u0003\u0002\u0002>?\u0007",
    "\u0003\u0002\u0002?A\u0005\u000e\b\u0004@=\u0003\u0002\u0002\u0002A",
    "D\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002",
    "\u0002C\u000f\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002\u0007",
    "&*/3B"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'||'", "'<='", "'-'", "'Equals'", "'.'", "';'", 
                     "'('", "')'", "'{'", "'}'", "'if'", "'else'", "'return'" ];

var symbolicNames = [ null, "OR", "LTEQ", "MINUS", "EQUALS", "DOT", "SCOL", 
                      "OPAR", "CPAR", "OBRACE", "CBRACE", "IF", "ELSE", 
                      "RETURN", "RETRYID", "ID", "FLOAT", "STRING", "SPACE" ];

var ruleNames =  [ "parse", "if_stat", "if_block", "condition_block", "stat_block", 
                   "condition", "equals_condition" ];

function RecognizerParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RecognizerParser.prototype = Object.create(antlr4.Parser.prototype);
RecognizerParser.prototype.constructor = RecognizerParser;

Object.defineProperty(RecognizerParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RecognizerParser.EOF = antlr4.Token.EOF;
RecognizerParser.OR = 1;
RecognizerParser.LTEQ = 2;
RecognizerParser.MINUS = 3;
RecognizerParser.EQUALS = 4;
RecognizerParser.DOT = 5;
RecognizerParser.SCOL = 6;
RecognizerParser.OPAR = 7;
RecognizerParser.CPAR = 8;
RecognizerParser.OBRACE = 9;
RecognizerParser.CBRACE = 10;
RecognizerParser.IF = 11;
RecognizerParser.ELSE = 12;
RecognizerParser.RETURN = 13;
RecognizerParser.RETRYID = 14;
RecognizerParser.ID = 15;
RecognizerParser.FLOAT = 16;
RecognizerParser.STRING = 17;
RecognizerParser.SPACE = 18;

RecognizerParser.RULE_parse = 0;
RecognizerParser.RULE_if_stat = 1;
RecognizerParser.RULE_if_block = 2;
RecognizerParser.RULE_condition_block = 3;
RecognizerParser.RULE_stat_block = 4;
RecognizerParser.RULE_condition = 5;
RecognizerParser.RULE_equals_condition = 6;

function ParseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RecognizerParser.RULE_parse;
    return this;
}

ParseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ParseContext.prototype.if_stat = function() {
    return this.getTypedRuleContext(If_statContext,0);
};

ParseContext.prototype.EOF = function() {
    return this.getToken(RecognizerParser.EOF, 0);
};

ParseContext.prototype.enterRule = function(listener) {
    if(listener instanceof RecognizerListener ) {
        listener.enterParse(this);
	}
};

ParseContext.prototype.exitRule = function(listener) {
    if(listener instanceof RecognizerListener ) {
        listener.exitParse(this);
	}
};




RecognizerParser.ParseContext = ParseContext;

RecognizerParser.prototype.parse = function() {

    var localctx = new ParseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RecognizerParser.RULE_parse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.if_stat();
        this.state = 15;
        this.match(RecognizerParser.EOF);
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
};

function If_statContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RecognizerParser.RULE_if_stat;
    return this;
}

If_statContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_statContext.prototype.constructor = If_statContext;

If_statContext.prototype.IF = function() {
    return this.getToken(RecognizerParser.IF, 0);
};

If_statContext.prototype.if_block = function() {
    return this.getTypedRuleContext(If_blockContext,0);
};

If_statContext.prototype.ELSE = function() {
    return this.getToken(RecognizerParser.ELSE, 0);
};

If_statContext.prototype.stat_block = function() {
    return this.getTypedRuleContext(Stat_blockContext,0);
};

If_statContext.prototype.enterRule = function(listener) {
    if(listener instanceof RecognizerListener ) {
        listener.enterIf_stat(this);
	}
};

If_statContext.prototype.exitRule = function(listener) {
    if(listener instanceof RecognizerListener ) {
        listener.exitIf_stat(this);
	}
};




RecognizerParser.If_statContext = If_statContext;

RecognizerParser.prototype.if_stat = function() {

    var localctx = new If_statContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RecognizerParser.RULE_if_stat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this.match(RecognizerParser.IF);
        this.state = 18;
        this.if_block();
        this.state = 19;
        this.match(RecognizerParser.ELSE);
        this.state = 20;
        this.stat_block();
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
};

function If_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RecognizerParser.RULE_if_block;
    return this;
}

If_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_blockContext.prototype.constructor = If_blockContext;

If_blockContext.prototype.condition_block = function() {
    return this.getTypedRuleContext(Condition_blockContext,0);
};

If_blockContext.prototype.stat_block = function() {
    return this.getTypedRuleContext(Stat_blockContext,0);
};

If_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof RecognizerListener ) {
        listener.enterIf_block(this);
	}
};

If_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof RecognizerListener ) {
        listener.exitIf_block(this);
	}
};




RecognizerParser.If_blockContext = If_blockContext;

RecognizerParser.prototype.if_block = function() {

    var localctx = new If_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RecognizerParser.RULE_if_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.condition_block();
        this.state = 23;
        this.stat_block();
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
};

function Condition_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RecognizerParser.RULE_condition_block;
    return this;
}

Condition_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Condition_blockContext.prototype.constructor = Condition_blockContext;

Condition_blockContext.prototype.OPAR = function() {
    return this.getToken(RecognizerParser.OPAR, 0);
};

Condition_blockContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

Condition_blockContext.prototype.CPAR = function() {
    return this.getToken(RecognizerParser.CPAR, 0);
};

Condition_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof RecognizerListener ) {
        listener.enterCondition_block(this);
	}
};

Condition_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof RecognizerListener ) {
        listener.exitCondition_block(this);
	}
};




RecognizerParser.Condition_blockContext = Condition_blockContext;

RecognizerParser.prototype.condition_block = function() {

    var localctx = new Condition_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RecognizerParser.RULE_condition_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this.match(RecognizerParser.OPAR);
        this.state = 26;
        this.condition();
        this.state = 27;
        this.match(RecognizerParser.CPAR);
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
};

function Stat_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RecognizerParser.RULE_stat_block;
    return this;
}

Stat_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stat_blockContext.prototype.constructor = Stat_blockContext;

Stat_blockContext.prototype.OBRACE = function() {
    return this.getToken(RecognizerParser.OBRACE, 0);
};

Stat_blockContext.prototype.stat_block = function() {
    return this.getTypedRuleContext(Stat_blockContext,0);
};

Stat_blockContext.prototype.CBRACE = function() {
    return this.getToken(RecognizerParser.CBRACE, 0);
};

Stat_blockContext.prototype.if_stat = function() {
    return this.getTypedRuleContext(If_statContext,0);
};

Stat_blockContext.prototype.RETURN = function() {
    return this.getToken(RecognizerParser.RETURN, 0);
};

Stat_blockContext.prototype.FLOAT = function() {
    return this.getToken(RecognizerParser.FLOAT, 0);
};

Stat_blockContext.prototype.SCOL = function() {
    return this.getToken(RecognizerParser.SCOL, 0);
};

Stat_blockContext.prototype.MINUS = function() {
    return this.getToken(RecognizerParser.MINUS, 0);
};

Stat_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof RecognizerListener ) {
        listener.enterStat_block(this);
	}
};

Stat_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof RecognizerListener ) {
        listener.exitStat_block(this);
	}
};




RecognizerParser.Stat_blockContext = Stat_blockContext;

RecognizerParser.prototype.stat_block = function() {

    var localctx = new Stat_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RecognizerParser.RULE_stat_block);
    var _la = 0; // Token type
    try {
        this.state = 40;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RecognizerParser.OBRACE:
            this.enterOuterAlt(localctx, 1);
            this.state = 29;
            this.match(RecognizerParser.OBRACE);
            this.state = 30;
            this.stat_block();
            this.state = 31;
            this.match(RecognizerParser.CBRACE);
            break;
        case RecognizerParser.IF:
            this.enterOuterAlt(localctx, 2);
            this.state = 33;
            this.if_stat();
            break;
        case RecognizerParser.RETURN:
            this.enterOuterAlt(localctx, 3);
            this.state = 34;
            this.match(RecognizerParser.RETURN);
            this.state = 36;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===RecognizerParser.MINUS) {
                this.state = 35;
                this.match(RecognizerParser.MINUS);
            }

            this.state = 38;
            this.match(RecognizerParser.FLOAT);
            this.state = 39;
            this.match(RecognizerParser.SCOL);
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
};

function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RecognizerParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.RETRYID = function() {
    return this.getToken(RecognizerParser.RETRYID, 0);
};

ConditionContext.prototype.LTEQ = function() {
    return this.getToken(RecognizerParser.LTEQ, 0);
};

ConditionContext.prototype.FLOAT = function() {
    return this.getToken(RecognizerParser.FLOAT, 0);
};

ConditionContext.prototype.MINUS = function() {
    return this.getToken(RecognizerParser.MINUS, 0);
};

ConditionContext.prototype.equals_condition = function() {
    return this.getTypedRuleContext(Equals_conditionContext,0);
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RecognizerListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RecognizerListener ) {
        listener.exitCondition(this);
	}
};




RecognizerParser.ConditionContext = ConditionContext;

RecognizerParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RecognizerParser.RULE_condition);
    var _la = 0; // Token type
    try {
        this.state = 49;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 42;
            this.match(RecognizerParser.RETRYID);
            this.state = 43;
            this.match(RecognizerParser.LTEQ);
            this.state = 45;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===RecognizerParser.MINUS) {
                this.state = 44;
                this.match(RecognizerParser.MINUS);
            }

            this.state = 47;
            this.match(RecognizerParser.FLOAT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 48;
            this.equals_condition(0);
            break;

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
};

function Equals_conditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RecognizerParser.RULE_equals_condition;
    return this;
}

Equals_conditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Equals_conditionContext.prototype.constructor = Equals_conditionContext;

Equals_conditionContext.prototype.RETRYID = function() {
    return this.getToken(RecognizerParser.RETRYID, 0);
};

Equals_conditionContext.prototype.DOT = function() {
    return this.getToken(RecognizerParser.DOT, 0);
};

Equals_conditionContext.prototype.EQUALS = function() {
    return this.getToken(RecognizerParser.EQUALS, 0);
};

Equals_conditionContext.prototype.OPAR = function() {
    return this.getToken(RecognizerParser.OPAR, 0);
};

Equals_conditionContext.prototype.STRING = function() {
    return this.getToken(RecognizerParser.STRING, 0);
};

Equals_conditionContext.prototype.CPAR = function() {
    return this.getToken(RecognizerParser.CPAR, 0);
};

Equals_conditionContext.prototype.equals_condition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Equals_conditionContext);
    } else {
        return this.getTypedRuleContext(Equals_conditionContext,i);
    }
};

Equals_conditionContext.prototype.OR = function() {
    return this.getToken(RecognizerParser.OR, 0);
};

Equals_conditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RecognizerListener ) {
        listener.enterEquals_condition(this);
	}
};

Equals_conditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RecognizerListener ) {
        listener.exitEquals_condition(this);
	}
};



RecognizerParser.prototype.equals_condition = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Equals_conditionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, RecognizerParser.RULE_equals_condition, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.match(RecognizerParser.RETRYID);
        this.state = 53;
        this.match(RecognizerParser.DOT);
        this.state = 54;
        this.match(RecognizerParser.EQUALS);
        this.state = 55;
        this.match(RecognizerParser.OPAR);
        this.state = 56;
        this.match(RecognizerParser.STRING);
        this.state = 57;
        this.match(RecognizerParser.CPAR);
        this._ctx.stop = this._input.LT(-1);
        this.state = 64;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Equals_conditionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, RecognizerParser.RULE_equals_condition);
                this.state = 59;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 60;
                this.match(RecognizerParser.OR);
                this.state = 61;
                this.equals_condition(2); 
            }
            this.state = 66;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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
};


RecognizerParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 6:
			return this.equals_condition_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

RecognizerParser.prototype.equals_condition_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.RecognizerParser = RecognizerParser;
