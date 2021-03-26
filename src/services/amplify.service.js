import { Auth } from 'aws-amplify';
import { S3 } from 'aws-sdk'
import awsConfig from '../../aws-exports'

export const storeFileInS3 = async ({
  fileUri, fileName, contentType, awsKeyPrefix, onProgress = null
}) => {
  // we can't use amplify's native Storage class here, since it doesn't support big files (needs files in memory
  // so we'll need to upload the file manually

  // amplify can get iam credentails for us
  const credentials = Auth.essentialCredentials(await Auth.currentCredentials())
  const s3 = new S3({
    credentials,
    region: awsConfig.aws_user_files_s3_bucket_region
  })

  const key = `${awsKeyPrefix}/${fileName}`
  const signedUrl = s3.getSignedUrl('putObject', {
    // mimic amplify storage behaviour (public is prefixed automatically)
    Key: `public/${key}`,
    Bucket: awsConfig.aws_user_files_s3_bucket,
    ContentType: contentType
  })

  // we can't use fetch here since it doesn't report upload progress, so we'll convert xmlhttprequest to a promise
  await new Promise((res, rej) => {
    // eslint-disable-next-line no-undef
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedUrl);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status !== 200) {
        // eslint-disable-next-line no-console
        console.log('Error while sending file to S3.', xhr.response);
      }
    }

    if (onProgress) {
      xhr.upload.onprogress = (e) => onProgress(e.loaded / e.total * 100)
    }

    xhr.onload = res
    xhr.onerror = rej

    xhr.setRequestHeader('Content-Type', contentType);
    xhr.send({
      name: fileName,
      uri: fileUri,
      type: contentType
    });
  })

  return {
    key: fileName
  }
};
