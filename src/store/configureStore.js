import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
// import { ping } from './enhancers/ping';
import logger from 'redux-logger';
/*
 * redux-thunk
 * https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
 * позволяет возвращать из action creator не объект события, а функцию
 * которая имеет доступ к методам хранилища (dispatch, getState)
 */
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
