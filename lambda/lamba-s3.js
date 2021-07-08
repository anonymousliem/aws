var
    AWS = require("aws-sdk"),
    LAMBDA = new AWS.Lambda({
        apiVersion: "2015-03-31",
        region: "us-east-1"
    });


function createLambdaFromZip(){
     var
        params = {
            Code: {
                S3Bucket: "YOUR_S3_BUCKET",
                S3Key: "website_api_code.zip"
            },
            Description: "Amazing cat website",
            FunctionName: "CatSearch",
            Handler: "query_cats.handler",
            MemorySize: 128,
            Publish: true,
            Role: "YOUR_ROLE",
            Runtime: "nodejs6.10",
            Timeout: 30,
        };
        LAMBDA.createFunction(params, function(err, data){
            console.log(err, data);
        });
}
(function init(){
    createLambdaFromZip();
})();
