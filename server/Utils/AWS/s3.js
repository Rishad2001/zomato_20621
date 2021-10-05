import AWS from "aws-sdk";

//AWS S3 bucket config
const s3Bucket = new AWS.S3({
    accessKeyId : "AKIA4MV7H3QULJBFXJ6I",
    secretAccessKey : "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",
    region: "ap-south-1",
});

 export const s3Upload = (options) => {
    return new Promise((resolve, reject) => {
        s3Bucket.upload(options, (error,data) => {
            if (error) return reject(error);
            return resolve(data);
        })
    });
};