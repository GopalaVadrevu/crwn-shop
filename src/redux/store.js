// The main store for this application
import {createStore, applyMiddleware} from 'redux';

import logger from 'redux-logger'; //to log all the reduce store actions

import rootReducer from './root-reducer';

const middlewares =[logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

