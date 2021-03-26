import constants from '../constants';
import {videoService} from '../../services';

const {FEED_FETCH_VIDEOS, FEED_FETCH_VIDEOS_PENDING} = constants;

const fetchVideos = (topics = []) => async (dispatch) => {
  dispatch({
    type: FEED_FETCH_VIDEOS_PENDING,
  });

  // TODO: implement pagination, removed for temporary randomize function and video swipe next gesture (amplify is annoying)
  const {videos: allVideos} = await videoService.fetchVideoFeed(
    9999,
    null,
    topics,
  );

  return dispatch({
    type: FEED_FETCH_VIDEOS,
    videos: allVideos,
  });
};

export default {
  fetchVideos,
};
