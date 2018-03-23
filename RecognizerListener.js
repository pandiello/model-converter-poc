// Generated from .\Recognizer.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by RecognizerParser.
function RecognizerListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

RecognizerListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
RecognizerListener.prototype.constructor = RecognizerListener;

// Enter a parse tree produced by RecognizerParser#parse.
RecognizerListener.prototype.enterParse = function(ctx) {
};

// Exit a parse tree produced by RecognizerParser#parse.
RecognizerListener.prototype.exitParse = function(ctx) {
};


// Enter a parse tree produced by RecognizerParser#if_stat.
RecognizerListener.prototype.enterIf_stat = function(ctx) {
};

// Exit a parse tree produced by RecognizerParser#if_stat.
RecognizerListener.prototype.exitIf_stat = function(ctx) {
};


// Enter a parse tree produced by RecognizerParser#if_block.
RecognizerListener.prototype.enterIf_block = function(ctx) {
};

// Exit a parse tree produced by RecognizerParser#if_block.
RecognizerListener.prototype.exitIf_block = function(ctx) {
};


// Enter a parse tree produced by RecognizerParser#condition_block.
RecognizerListener.prototype.enterCondition_block = function(ctx) {
};

// Exit a parse tree produced by RecognizerParser#condition_block.
RecognizerListener.prototype.exitCondition_block = function(ctx) {
};


// Enter a parse tree produced by RecognizerParser#stat_block.
RecognizerListener.prototype.enterStat_block = function(ctx) {
};

// Exit a parse tree produced by RecognizerParser#stat_block.
RecognizerListener.prototype.exitStat_block = function(ctx) {
};


// Enter a parse tree produced by RecognizerParser#condition.
RecognizerListener.prototype.enterCondition = function(ctx) {
};

// Exit a parse tree produced by RecognizerParser#condition.
RecognizerListener.prototype.exitCondition = function(ctx) {
};


// Enter a parse tree produced by RecognizerParser#equals_condition.
RecognizerListener.prototype.enterEquals_condition = function(ctx) {
};

// Exit a parse tree produced by RecognizerParser#equals_condition.
RecognizerListener.prototype.exitEquals_condition = function(ctx) {
};



exports.RecognizerListener = RecognizerListener;