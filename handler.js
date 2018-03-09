'use strict';
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
var s3 = new AWS.S3();


module.exports.processBigdataModel = (event, context, callback) => {

  console.log("start function")
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
           if (!err)
              return onFileContent(params, data.Body.toString());
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
