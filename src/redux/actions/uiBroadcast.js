import constants from '../constants';

const { UI_BROADCAST_UPDATE } = constants;
const actionCreators = {
  update: (key, value) => ({ type: UI_BROADCAST_UPDATE, key, value }),
};
const update = (key, value) => (dispatch) => {
  dispatch(actionCreators.update(key, value));
};
const setIdleVideoOverlay = () => (dispatch) => {
  dispatch(actionCreators.update('isBgImageVisible', false));
  dispatch(actionCreators.update('isBgVideoVisible', false));

};
const setActiveVideoOverlay = ({ isImageActive = false }) => (dispatch) => {
  dispatch(actionCreators.update('isBgImageVisible', !!isImageActive));
  dispatch(actionCreators.update('isBgVideoVisible', true));
};
const updateVideoProgress = (stamp) => (dispatch) => {
  dispatch(actionCreators.update('bgVideoTimestamp', stamp));
};
const pauseVideo = () => (dispatch) => {
  dispatch(actionCreators.update('bgVideoIsPaused', true));
};
const resumeVideo = () => (dispatch) => {
  dispatch(actionCreators.update('bgVideoIsPaused', true));
};
const setBgVideoStatus = (status) => (dispatch) => {
  const allowList = ['init', 'started', 'ready', 'hidden'];
  if (['init', 'started', 'ready', 'hidden'].includes(status.toLowerCase())) {
    dispatch(actionCreators.update('bgVideoStatus', status));
    return;
  }
  // eslint-disable-next-line no-console, prefer-template
  console.warn('ui Actions: setBgVideoStatus() recieved invalid value of \''+status+'\'. Expected ' + allowList.join(', '))
};
const actions = {
  pauseVideo,
  resumeVideo,
  setBgVideoStatus,
  updateVideoProgress,
  setActiveVideoOverlay,
  setIdleVideoOverlay,
  update
};

export default actions;
export { actionCreators };
