import constants from '../constants';

const { FEED_FETCH_VIDEOS, FEED_FETCH_VIDEOS_PENDING } = constants;

const feedReducer = (state = { videos: [], loading: true }, action) => {
  switch (action.type) {
    case FEED_FETCH_VIDEOS_PENDING:
      return { ...state, loading: true }
    case FEED_FETCH_VIDEOS:
      return { ...state, videos: action.videos, loading: false };
    default:
      return state;
  }
};

export default feedReducer;
