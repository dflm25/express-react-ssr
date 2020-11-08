/**
 * Auth services
 */
import Http from './Http';
import * as action from '../redux/actions';

export function login(credentials) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post('/auth/login', credentials)
        .then((res) => {
          dispatch(action.authLogin(res.data));
          return resolve(res.data);
        })
        .catch((err) => {
          const { status, errors } = err.response.data;
          const data = {
            status,
            errors,
          };
          return reject(data);
        });
    })
  )
}