import {createSelector} from 'reselect';

const navSelector = state => state.navigation

export const displaySelector = createSelector(
    [navSelector],
    nav => nav.display_sidebar
)

export const pageSelector = createSelector(
    [navSelector],
    nav => nav.active_page
)