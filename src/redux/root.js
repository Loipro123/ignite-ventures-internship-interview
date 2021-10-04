import {combineReducers} from 'redux';
import {navReducer} from './nav/nav.reducer';


const rootReducer = combineReducers({
    navigation: navReducer,
});

export default rootReducer;