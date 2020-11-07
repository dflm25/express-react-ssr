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

