var
    AWS = require("aws-sdk"),
    S3API = new AWS.S3({
        apiVersion: "2006-03-01",
        region: "us-east-1"
    });

(function makeBucketWebsiteEnabled(){
    var
        params = {
            Bucket: "YOUR_UNIQUE_BUCKET_NAME",
            WebsiteConfiguration: {
            	ErrorDocument: {
					Key: "error.html"
				},
				IndexDocument: {
					Suffix: "index.html"
				}
			}
 		};
        S3API.putBucketWebsite(params, function(error, data){
            console.log(error, data);
        });
})();
