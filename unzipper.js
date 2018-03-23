var unzipper = require("unzipper")
var fs = require("fs")
var antlr4 = require('antlr4')

var RecognizerLexer = require('./RecognizerLexer.js')
var RecognizerParser = require('./RecognizerParser.js')

const rules = [];
const models = [];
fs.createReadStream(__dirname + '/fakes/fake1.zip')
  .pipe(unzipper.Parse())
  .on('entry', entry => {
    entry.on('data', data => {
      const classname =  entry.path.split(".")[0];
      
	  validateGrammar(data.toString(),classname)
		.pipe(transform)		
		.pipe(write)
		.include(rules)     
	 })
   })
   .on('finish', () => {
      createmodel("fake4Model", rules)
      .include(models)
   })


function validateGrammar(input, classname){

	var chars = new antlr4.InputStream(input);
	var lexer = new RecognizerLexer.RecognizerLexer(chars);
	var tokens  = new antlr4.CommonTokenStream(lexer);	
	var parser = new RecognizerParser.RecognizerParser(tokens);	
	parser.removeErrorListeners();
	
	var errors = []; 
	var syntaxError = function(line, column, msg) {
		errors.push({line: line, column: column, msg: msg});
	};
	
	parser.addErrorListener(new RecognizerErrorListener(syntaxError));	
	parser.parse();

	if (errors.length > 0){
		var error = errors[0];
		throw {
			name: "Grammar Error",
			message: classname + "line " + error.line + ":" + error.column + " " + error.msg
		}
	}
	
	return {		
		pipe: function(d){
			return d(input, classname)
		}
	} 
}	 
   
function transform(data, classname){
  const template =`
// -----------------------------------------------------------------------
// <copyright file='{0}.cs' company='Payvision'>
//     Payvision Copyright © 2018
// </copyright>
// -----------------------------------------------------------------------

namespace Payvision.CardProcessing.Business.DynamicModel.Rules
{
    using AuthRetry.Contracts.Candidates;
    using AuthRetry.Contracts.Rules;

    internal class {0} : IModelRule
    {
        public double Evaluate(Candidate c)
        {
            {1}
        }
    }
}`

  const transformedcontent = template.replace(/\{0\}/g, classname).replace(/\{1\}/g, data)
  return {
    pipe: function(d){
      return d(transformedcontent, classname)
    }
  }
}

function write(content, classname){
  const basePath = __dirname + "/tmp/";
  if (!fs.existsSync(basePath)){
    fs.mkdirSync(basePath);
  }

  const filePath = basePath  + classname + '.cs';
  fs.writeFile(filePath, content, err => {
      if(err){
        console.log(err)
      }else{
        console.log("file saved as : " + filePath )
      }
    }
  )

  return {
    include: function(array){
      array.push(classname)
    }
  }
}

function createmodel(modelname, rulenames){
  const template = `
// -----------------------------------------------------------------------
// <copyright file='{0}.cs' company='Payvision'>
//     Payvision Copyright © 2018
// </copyright>
// -----------------------------------------------------------------------

namespace Payvision.CardProcessing.Business.DynamicModel
{
    using System.Collections.Generic;
    using AuthRetry.Contracts.Candidates;
    using AuthRetry.Contracts.Models;
    using AuthRetry.Contracts.Rules;

    public class {0} : AverageRulesModel
    {
        public override string Name { get; } = "{0}";

        protected override IEnumerable<IModelRule> Rules { get; } = new List<IModelRule>
        {
            {1}
        };
    }
}`

    const transformedcontent = template.replace(/\{0\}/g, modelname).replace(/\{1\}/g, rulenames.map(rulename => "new " + rulename + "()").join(","))
    return write(transformedcontent, modelname)
}

function RecognizerErrorListener(callback) {
	antlr4.error.ErrorListener.call(this);
    this.callback = callback;
	return this;
}

RecognizerErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
RecognizerErrorListener.prototype.constructor = RecognizerErrorListener;
RecognizerErrorListener.INSTANCE = new RecognizerErrorListener();
RecognizerErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    this.callback(line, column, msg);
};