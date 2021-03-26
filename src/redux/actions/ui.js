import constants from '../constants';

const { UI_UPDATE } = constants;
const actionCreators = {
  update: (key, value) => ({ type: UI_UPDATE, key, value }),
};
const update = (key, value) => (dispatch) => {
  dispatch(actionCreators.update(key, value));
};
const setIdleVideoOverlay = () => (dispatch) => {
  dispatch(actionCreators.update('isBgImageVisible', false));
  dispatch(actionCreators.update('isBgVideoVisible', false));
};
const setActiveVideoOverlay = ({ isImageActive = false }) => (dispatch) => {
  dispatch(actionCreators.update('isBgImageVisible', isImageActive));
  dispatch(actionCreators.update('isBgVideoVisible', true));
};
const actions = {
  setActiveVideoOverlay,
  setIdleVideoOverlay,
  update
};

export default actions;
export { actionCreators };
