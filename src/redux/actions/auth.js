import * as Sentry from '@sentry/react-native';
import constants from '../constants';

const { AUTH_LOGIN, AUTH_UPDATE, AUTH_LOGOUT } = constants;

const actionCreators = {
  update: (key, value) => ({ type: AUTH_UPDATE, [key]: value }),
  login: data => ({ type: AUTH_LOGIN, ...data }),
  logout: () => ({ type: AUTH_LOGOUT })
};
const login = profileData => (dispatch) => {
  Sentry.setUser({ id: profileData.id, email: profileData.email, name: profileData.name })
  dispatch(actionCreators.login(profileData));
};
const logout = () => (dispatch) => {
  Sentry.setUser(null)
  dispatch(actionCreators.logout());
};
const update = (key, value) => (dispatch) => {
  dispatch(actionCreators.update(key, value));
};

const actions = {
  update, login, logout
};

export default actions;
export { actionCreators };
