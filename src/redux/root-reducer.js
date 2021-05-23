// The Root Reducer is the base and root reducr and combiner reducers

import {combineReducers} from 'redux';

import userReducer from './user/user-reducer';

export default combineReducers({
    user:userReducer

});



