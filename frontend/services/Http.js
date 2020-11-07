/**
 * Http request handler
 */
import axios from 'axios';
import store from '../redux/store';
import * as actions from '../redux/actions';

// const token = localStorage.getItem('access_token');
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;

axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(actions.authLogout());
    }
    return Promise.reject(error);
  },
);

export default axios;
