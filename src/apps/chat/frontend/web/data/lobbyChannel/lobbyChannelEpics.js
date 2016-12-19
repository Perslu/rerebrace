import { pipe } from 'ramda'
import { select, combineEpics } from 'redux-most'
import { INIT as LOBBY_INIT } from './lobbyChannelActionTypes'
import { CREATED as SOCKET_CREATED } from 'data/socket/socketActionTypes'
import {
  newChannelCreated,
  channelOnConnectionSuccess,
  channelOnConnectionFailure,
  channelOnPresenceState,
  channelOnPresenceDiff,
} from './lobbyChannelActions'
import { getSocketSelector } from 'data/socket/socketSelectors'


function attachChannelListeners(dispatch, channel) {
  channel.on("presence_state", state => {
    console.log(state)
    dispatch(channelOnPresenceState(state))})
  channel.on("presence_diff", pipe(channelOnPresenceDiff, dispatch))
  //channel.on("message_new", pipe(channelOnPresenceDiff, dispatch))
}


const createChannelForSocket = (store) => () => {
  const socket = getSocketSelector(store.getState())
  const channel = socket.channel("room:lobby", {})
  attachChannelListeners(store.dispatch, channel)
  channel.join()
  .receive("ok", pipe(channelOnConnectionSuccess, store.dispatch))
  .receive("error", pipe(channelOnConnectionFailure, store.dispatch))
  return newChannelCreated(channel)
}

function createChannel(action$, store) {
  const socketCreated$ = select(SOCKET_CREATED, action$)
  const lobbyInit$ = select(LOBBY_INIT, action$)
  return socketCreated$.combine(createChannelForSocket(store), lobbyInit$)
}

export default combineEpics(createChannel)
