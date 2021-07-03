var
    AWS = require("aws-sdk"),
    S3API = new AWS.S3({
        apiVersion: "2006-03-01",
        region: "us-east-1"
    });

(function createBucket(){
    var
        params = {
            //USE YOUR BUCKET NAME HERE
            Bucket: "YOUR_UNIQUE_BUCKET_NAME",
        };
        S3API.createBucket(params, function(error, data){
            console.log(error, data);
        });
})();
