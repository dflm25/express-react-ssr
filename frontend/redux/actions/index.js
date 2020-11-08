/**
 * Redux actions
 */

import { TOGGLE_MENU, AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from '../constants';

// Tooggle main menu
export const setToggleMenu = () => ({
  type: TOGGLE_MENU
});

/**
 * Auth actions
 * @param {*} payload 
 */
export function authLogin(payload) {
  return {
    type: AUTH_LOGIN,
    payload,
  };
}

export function authLogout() {
  return {
    type: AUTH_LOGOUT,
  };
}

export function authCheck() {
  return {
    type: AUTH_CHECK,
  };
}
