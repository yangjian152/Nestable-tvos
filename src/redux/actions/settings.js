import constants from '../constants';

const { SETTING_BULK_UPDATE, SETTING_PATCH } = constants;

const actionCreators = {
  hydrateSettings: data => ({ type: SETTING_BULK_UPDATE, ...data }),
  updateSetting: (key, value) => ({ type: SETTING_PATCH, key, value })
};
const hydrateSettings = data => (dispatch) => {
  dispatch(actionCreators.hydrateSettings(data));
};
const updateSetting = (updateProperty, data) => (dispatch) => {
  dispatch(actionCreators.updateSetting(updateProperty, data));
};

const actions = {
  hydrateSettings, updateSetting
};

export default actions;
export { actionCreators };
