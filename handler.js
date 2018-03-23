'use strict';
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
var s3 = new AWS.S3();
var unzipper = require("unzipper")
var fs = require("fs")
var antlr4 = require('antlr4')
var randomString = require('random-string');
var RecognizerLexer = require('./RecognizerLexer.js')
var RecognizerParser = require('./RecognizerParser.js')

module.exports.processBigdataModel = (event, context, callback) => {

  console.log("start function")
  const rules = [];
  const models = [];

  const bucketName = event.Records[0].s3.bucket.name;
  const fileName = event.Records[0].s3.object.key;

  console.log("bucketName : " + bucketName + " fileName: " + fileName)
  var newFileName = readFile(bucketName, fileName, processFileContent);

  const response = {
    statusCode: 200,
    body: JSON.stringify(newFileName)
  };

  callback(null, response);
};

function readFile (bucketName, filename, onFileContent) {
      console.log("Readinig file :" + filename + " from bucket: " +  bucketName)
       var params = { Bucket: bucketName, Key: filename };
       s3.getObject(params, function (err, data) {
           if (!err){
             var tmpZipFileName = randomString() + '.zip';
              write(data.Body, tmpZipFileName)

               fs.createReadStream('/tmp/' + tmpZipFileName)
               .pipe(unzipper.Parse())
               .on('entry', entry => {
                 entry.on('data', data => {
                   const classname =  entry.path.split(".")[0];

             	   validateGrammar(data.toString(),classname)
             		.pipe(transform)
             		.pipe(WriteCsFile)
             		.include(rules)
             	 })
                })
                .on('finish', () => {
                   createmodel(filename, rules)
                   .include(models)
                })
            }
           else
               console.log(err);
       });
   }

function processFileContent(params, content) {
   console.log(content);
   const file = params.Key.split('/')[1];
   const newFileName = "transformed/" + file;
   var params = {
      Bucket : params.Bucket,
      Key : newFileName,
      Body : content + " It's transformed!"
    }

    s3.putObject(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log("success");           // successful response
  });

  return newFileName
}

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

function WriteCsFile(content, fileName){
  return write(content, fileName + '.cs')
}

function write(content, fileName){

  const basePath = "/tmp/";
  if (!fs.existsSync(basePath)){
    fs.mkdirSync(basePath);
  }

  const filePath = basePath  + fileName;
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
    return WriteCsFile(transformedcontent, modelname)
}
