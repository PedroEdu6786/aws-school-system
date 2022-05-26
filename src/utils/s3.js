const aws = require('aws-sdk');

const s3 = new aws.S3({
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_SESSION_TOKEN
  },
  region: 'us-east-1'
});

const { BUCKET } = process.env;
module.exports.upload = async (s3Key, fileData) => {
  const s3UploadResponse = await s3
    .upload({
      Key: s3Key,
      Body: fileData,
      Bucket: BUCKET,
      ACL: 'public-read'
    })
    .promise();

  return {
    key: s3Key,
    version: s3UploadResponse.VersionId,
    exists: false,
    location: s3UploadResponse.Location
  };
};
