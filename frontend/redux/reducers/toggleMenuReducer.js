/**
 * Toggle menu
 */

import {TOGGLE_MENU} from '../constants';

const toggleMenuReducer = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return !state;
        default:
            return state;
    }
};

export default toggleMenuReducer;