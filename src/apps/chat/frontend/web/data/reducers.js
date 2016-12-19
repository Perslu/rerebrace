/* eslint new-cap:0 */

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import message from './message/messageReducers';
import user from './user/userReducers';
import channelLobby from './lobbyChannel/lobbyChannelReducers';
import currentUser from './currentUser/currentUserReducers';
import socket from './socket/socketReducers'


export default function createReducer() {
  return combineReducers({
    message,
    user,
    currentUser,
    channelLobby,
    socket,
    form,
  });
}

/* eslint-disable */
// Using for injecting the async reducers
export const injectReducer = (store, name, reducer) => {
  store.asyncReducers[name] = reducer
  store.replaceReducer(createReducer(store.asyncReducers))
}
/* eslint-enable */
