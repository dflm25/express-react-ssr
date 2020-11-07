/**
 * Combine reducers
 */

import {combineReducers} from 'redux';
import toggleMenuReducer from './toggleMenuReducer';
import AuthReducer from './auth';

const rootReducer = combineReducers({
    stateMenu: toggleMenuReducer,
    auth: AuthReducer
});

export default rootReducer;