/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiNestablmobileapiGraphQLAPIIdOutput = process.env.API_NESTABLMOBILEAPI_GRAPHQLAPIIDOUTPUT
var apiNestablmobileapiGraphQLAPIEndpointOutput = process.env.API_NESTABLMOBILEAPI_GRAPHQLAPIENDPOINTOUTPUT
var storageUserVideosBucketName = process.env.STORAGE_USERVIDEOS_BUCKETNAME

Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");
const region = process.env.REGION || 'us-east-1'
AWS.config.update({ region: region });

const hasbin = require('hasbin');
const ffmpeg = require("fluent-ffmpeg");
!hasbin.sync('ffmpeg') && (ffmpeg.setFfmpegPath(`${__dirname}/ffmpeg/ffmpeg`))
!hasbin.sync('ffprobe') && (ffmpeg.setFfprobePath(`${__dirname}/ffmpeg/ffprobe`))

const promisify = require('util').promisify;
const path = require('path');
const fs = require('fs');
const { updateVideo, getVideo } = require('./utils/ddb');
const { downloadFile, uploadFile } = require('./utils/s3');
const { generateJpgThumbnail, generateVideoPreview } = require('./utils/ffmpeg');

exports.handler = async ({ arguments: arg }) => {
  const video = await getVideo(arg.id);
  console.log(video)
  const file = await downloadFile(video.Item.videoFullPath)
  console.log(file)

  const ffprobe = promisify(ffmpeg.ffprobe);
  const fileInfo = await ffprobe(file)

  const animatedPreviewPath = `${file}.preview.mp4`;
  if (fs.existsSync(animatedPreviewPath)) {
    fs.unlinkSync(animatedPreviewPath);
  }
  const jpgPreviewPath = `${file}.thumbnail.jpg`;
  if (fs.existsSync(jpgPreviewPath)) {
    fs.unlinkSync(jpgPreviewPath);
  }

  const [animatedPreviewFile, jpgFile] = await Promise.all([
    generateVideoPreview(file, animatedPreviewPath),
    generateJpgThumbnail(file, jpgPreviewPath)
  ]);

  console.log('uploading...')

  const animatedPreviewKey = `public/animated-preview/${path.basename(animatedPreviewFile)}`;
  await uploadFile(animatedPreviewFile, animatedPreviewKey);
  const thumbnailKey =  `public/jpg-preview/${path.basename(jpgFile)}`;
  await uploadFile(jpgFile, thumbnailKey);

  const item = await updateVideo(arg.id, {
    imageFullPath: path.basename(animatedPreviewKey),
    imageThumbnailPath: path.basename(thumbnailKey),
    duration: fileInfo.format.duration
  });

  return {
    statusCode: 200,
    body: { item }
  };
};