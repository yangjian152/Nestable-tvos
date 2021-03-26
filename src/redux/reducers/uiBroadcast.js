import constants from '../constants';

const { UI_BROADCAST_UPDATE, AUTH_LOGOUT } = constants;

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case UI_BROADCAST_UPDATE:
      return { ...state, [action.key]: action.value };
    case AUTH_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default authReducer;
