import {navActionTypes } from './nav.types';

export const ToogleSidebar = () => ({
    type: navActionTypes.TOOGGLE_SIDEBAR
})

export const ActivePage = (page) => ({
    type: navActionTypes.ACTIVE_PAGE,
    payload: page
})