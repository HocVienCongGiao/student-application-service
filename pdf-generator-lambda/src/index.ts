
    // this imports a bare-bones version of S3 that exposes the .send operation
    import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"

    // this imports just the getObject operation from S3
    // import { CopyObjectCommand,CopyObjectCommandInput } from "@aws-sdk/client-s3"

    import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";

    import path = require( "path");
    import fs = require( "fs");
  
export const pdf_generator = async (event: any = {}): Promise<any> => {
    console.log('Hello World!');
    const response = JSON.stringify(event, null, 2);


 // const puppeteerLambda = require('puppeteer-lambda');
 const chromium = require('chrome-aws-lambda');
 const browser = await chromium.puppeteer.launch({
   args: chromium.args,
   defaultViewport: chromium.defaultViewport,
   executablePath: await chromium.executablePath,
   headless: true, // chromium.headless,
   ignoreHTTPSErrors: true,
 });

 const page = await browser.newPage();
 await page.goto('file:///var/task/index.js');
 await page.screenshot({path: '/mnt/shared/example.png'});

 await browser.close(); 

 const file = "/mnt/shared/example.png"; // Path to and name of object. For example '../myFiles/index.js'.
 const fileStream = fs.createReadStream(file);
 
 // Set the parameters
//  const uploadParams = {
//    Bucket: "891616054205-ap-southeast-1-dev-sg-documents",
//    // Add the required 'Key' parameter using the 'path' module.
//    Key: path.basename(file),
//    // Add the required 'Body' parameter
//    Body: fileStream,
//  };
 
//  const s3Client = new S3Client({region: "ap-southeast-1"});
//  const data = await s3Client.send(new PutObjectCommand(uploadParams));
//  console.log("Success", data);



// await bareBonesS3.send(new GetObjectCommand({...}));
const client = new DynamoDBClient({ region: "ap-southeast-1" });
const command = new ListTablesCommand({});
try {
const results = await client.send(command);
if(results.TableNames != undefined) 
console.log(results.TableNames.join("\n"));
} catch (err) {
console.error(err);
}


    return response;
}

  
