/* global window */
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import fetchMiddleware from 'common/fetchMiddleware';

let replaceReducer = (store, createReducer) => {
  let newReducers = createReducer(store.reducers);

  store.reducers = {
    ...store.reducers,
    ...newReducers
  };

  store.replaceReducer(combineReducers(store.reducers));
};

export {replaceReducer};

export default () => {
  let devTools = window.devToolsExtension && window.devToolsExtension();

  let store = createStore(() => {}, devTools, applyMiddleware(
    fetchMiddleware,
    thunk
  ));

  store.reducers = {};

  return store;
}
