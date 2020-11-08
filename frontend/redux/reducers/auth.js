/**
 * Auth reducer
 */
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from '../constants';
import Http from '../../services/Http';

const defaultUser = {
  id: null,
  name: null,
  email: null,
};

const initialState = {
  isAuthenticated: false,
  user: defaultUser,
};

const authLogin = (state, payload) => {
  const { token, user } = payload;

  localStorage.setItem('access_token', token);
  localStorage.setItem('user', JSON.stringify(user));
  Http.defaults.headers.common.Authorization = `Bearer ${token}`;

  const stateObj = Object.assign({}, state, {
    isAuthenticated: true,
    user,
  });
  return stateObj;
};

const checkAuth = (state) => {
  if (process.browser) {
    const stateObj = Object.assign({}, state, {
      isAuthenticated: !!localStorage.getItem('access_token'),
      user: JSON.parse(localStorage.getItem('user')),
    });
    if (state.isAuthenticated) {
      Http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    }
    return stateObj;
  }
  return false;
};

const logout = (state) => {
  const stateObj = false;
  if (process.browser) {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    const stateObj = Object.assign({}, state, {
      isAuthenticated: false,
      user: defaultUser,
    });
  }
  return stateObj;
};

const Auth = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case AUTH_LOGIN:
      return authLogin(state, payload);
    case AUTH_CHECK:
      return checkAuth(state);
    case AUTH_LOGOUT:
      return logout(state);
    default:
      return state;
  }
};

export default Auth;