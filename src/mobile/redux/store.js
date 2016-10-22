import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import chalk from 'chalk';
import createReducer from './reducers';
import {routerMiddleware} from 'react-router-redux';

export default (history, initialState) => {
  const middlewares = [
    thunk.withExtraArgument(axios),
    routerMiddleware(history)
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
      window.devToolsExtension() : f => f,
  ];

  let store = createStore(createReducer(), initialState, compose(...enhancers));

  store.asyncReducers = {}; // Async reducer registry

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      System.import('./reducers')
      .then(reducers => store.replaceReducer(reducers.default(store.asyncReducers)))
      .catch(error => console.error(chalk.red(`==> 😭  Reducer hot reloading error ${error}`)))
    });
  }

  return store;
};
