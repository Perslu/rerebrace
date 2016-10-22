import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router/es6';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/store';

import routes from './routes';
import './index.html';
import './styles.css';

console.log("initialState", window.__INITIAL_STATE__);
const store = configureStore(browserHistory, window.__INITIAL_STATE__);

console.log("store", store.getState());


const mountNode = document.getElementById('react-root');

const history = syncHistoryWithStore(browserHistory, store);

const renderApp = () => {
  render(
    <Provider store={store}>
      <Router history={history} routes={routes}>
      </Router>
    </Provider>,
    mountNode
  );
};

// Enable hot reload by react-hot-loader
if (module.hot) {
  module.hot.accept('./routes', () => {
    setImmediate(() => {
      // Preventing the hot reloading error from react-router
      unmountComponentAtNode(mountNode);
      renderApp();
    });
  });
}

renderApp();
