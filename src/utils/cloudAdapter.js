import constants from '../constants';
import jsUtils from './js';

const {
  ASSET_PATHS: {
    VIDEO_WEBP_BUCKET_PATH,
    VIDEO_BUCKET_PATH,
    VIDEO_JPG_BUCKET_PATH,
    USER_AVATAR_BUCKET_PATH
  }
} = constants;

const cloudAdapterUtils = {
  webpUrlFromBucket: webpPath => `${VIDEO_WEBP_BUCKET_PATH}${jsUtils.checkLTrim(webpPath, VIDEO_WEBP_BUCKET_PATH)}`,
  videoFeedUrlFromBucket: videoPath => `${VIDEO_BUCKET_PATH}${jsUtils.checkLTrim(videoPath, VIDEO_BUCKET_PATH)}`,
  avatarFeedUrlFromBucket: avatarPath => avatarPath ? `${USER_AVATAR_BUCKET_PATH}${avatarPath}` : null ,
  posterFeedUrlFromBucket: thumbPath => (thumbPath || '').startsWith('thumbs/')
    ? `${VIDEO_JPG_BUCKET_PATH}${jsUtils.checkLTrim(thumbPath, 'thumbs/')}`
    : `${VIDEO_JPG_BUCKET_PATH}${jsUtils.checkLTrim(thumbPath, VIDEO_JPG_BUCKET_PATH)}`
};

export default cloudAdapterUtils;
