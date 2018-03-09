var unzipper = require("unzipper")
var fs = require("fs")

const rules = [];
const models = [];
fs.createReadStream(__dirname + '/fakes/fake4.zip')
  .pipe(unzipper.Parse())
  .on('entry', entry => {
    entry.on('data', data => {
      const classname =  entry.path.split(".")[0];
       read(data,classname)
       .pipe(write)
       .include(rules)
     })
   })
   .on('finish', () => {
      createmodel("fake4Model", rules)
      .include(models)
   })


function read(data, classname){
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

  const transformedcontent = template.replace(/\{0\}/g, classname).replace(/\{1\}/g, data.toString())
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
