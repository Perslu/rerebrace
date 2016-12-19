import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './data/store'
import App from './App'
import { initSocket } from 'data/socket/socketActions'


const store = configureStore(undefined, window.__INITIAL_STATE__)
const mountNode = document.getElementById('chat-react-root')

const renderApp = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    mountNode
  )
}

// Enable hot reload by react-hot-loader
if (module.hot) {
  module.hot.accept('./App', () => {
    setImmediate(() => {
      // Preventing the hot reloading error from react-router
      unmountComponentAtNode(mountNode)
      renderApp()
    })
  })
}
store.dispatch({type: 'app/PRE_FIRST_RENDER'})
renderApp()
store.dispatch({type: 'app/POST_FIRST_RENDER'})
store.dispatch(initSocket(_CHAT_API_))


