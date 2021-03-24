const AWS = require("aws-sdk");
const fs = require('fs');
const path = require('path');
const TMP_PATH = process.env.TMP_PATH || '/tmp';
const storageUserVideosBucketName = process.env.STORAGE_USERVIDEOS_BUCKETNAME || 'nestablfff3f480583d433aae1e16410bf58b46125243-local'
const s3 = new AWS.S3();

module.exports.downloadFile = (key) => new Promise((resolve, reject) => {
  const destPath = `${TMP_PATH}/${path.basename(key)}`

  console.log(`public/videos/${key}`)
  const s3Stream = s3
    .getObject({
      Bucket: storageUserVideosBucketName,
      Key: `public/videos/${key}`
    })
    .createReadStream();

  const fileStream = fs.createWriteStream(destPath);
  s3Stream.on('error', reject);
  fileStream.on('error', reject);
  fileStream.on('close', () => {
    resolve(destPath);
  });

  s3Stream.pipe(fileStream);
})

module.exports.uploadFile = (path, key) => {
  const file = fs.createReadStream(path);
  return s3.upload({
    Body: file,
    Bucket: storageUserVideosBucketName,
    Key: key
  }).promise();
}
