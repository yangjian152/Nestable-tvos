import { jsUtils } from '../../utils';
import constants from '../constants';

const { SETTING_BULK_UPDATE, SETTING_PATCH, AUTH_LOGOUT } = constants;

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SETTING_BULK_UPDATE:
      return { ...jsUtils.excludeKeysFromObject(action, ['type']) };
    case SETTING_PATCH:
      return { ...state, [action.key]: action.value };
    case AUTH_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default authReducer;
