/**
 * Combine reducers
 */

import {combineReducers} from 'redux';
import toggleMenuReducer from './toggleMenuReducer';

const rootReducer = combineReducers({
    stateMenu: toggleMenuReducer
});

export default rootReducer;