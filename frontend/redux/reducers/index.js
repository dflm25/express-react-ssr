/**
 * Combine reducers
 */

import {combineReducers} from 'redux';
import toggleMenuReducer from './toggleMenuReducer';
import AuthReducer from './auth';
import persistStore from './persistStore';

const rootReducer = combineReducers({
    stateMenu: toggleMenuReducer,
    auth: AuthReducer,
    persistStore
});

export default rootReducer;