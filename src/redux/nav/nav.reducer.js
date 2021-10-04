import {navActionTypes} from './nav.types';
const INITIAL_STATE = {
    display_sidebar: false,
    active_page: ''
}

export const navReducer= (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case navActionTypes.TOOGGLE_SIDEBAR:
            return {
                ...state,
                display_sidebar: !state.display_sidebar
            }
        case navActionTypes.ACTIVE_PAGE:
            return {
                    ...state,
                    active_page: action.payload
                }
        default:
            return state;
    }
}