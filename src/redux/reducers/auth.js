import { jsUtils } from '../../utils';
import constants from '../constants';

const { AUTH_UPDATE, AUTH_LOGIN, AUTH_LOGOUT } = constants;

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...jsUtils.excludeKeysFromObject(action, ['type']) };
    case AUTH_UPDATE:
      return { ...state, ...jsUtils.excludeKeysFromObject(action, ['type']) };
    case AUTH_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default authReducer;
