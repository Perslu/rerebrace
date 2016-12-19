import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-most'

import thunk from 'redux-thunk';
import axios from 'axios';
import chalk from 'chalk';

import createReducer from './reducers';
import rootEpic from './epics'


const epicMiddleware = createEpicMiddleware(rootEpic)


export default (history, initialState) => {
  const middlewares = [
    epicMiddleware
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
    
    module.hot.accept('./epics', () => {
      System.import('./epics')
      .then(epics => epicMiddleware.replaceEpic(epics.default))
      .catch(error => console.error(chalk.red(`==> 😭  Reducer hot reloading error ${error}`)))
    })
  }
  

  return store;
};
