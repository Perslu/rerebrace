import { pipe, curry, prop } from 'ramda'
import { select, combineEpics } from 'redux-most'
import { INIT, PRESENCE_DIFF, PRESENCE_STATE, PUSH_MESSAGE } from './lobbyChannelActionTypes'
import { CREATED as SOCKET_CREATED } from 'data/socket/socketActionTypes'
import {
  newChannelCreated,
  channelOnConnectionSuccess,
  channelOnConnectionFailure,
  channelOnPresenceState,
  channelOnPresenceDiff,
  messagePushed,
} from './lobbyChannelActions'
import { getSocketSelector } from 'data/socket/socketSelectors'
import {
  stateSync as presenceStateSync,
  stateDiff as presenceStateDiff,
} from 'data/presence/presenceActions'
import { addReceivedMessage } from 'data/message/messageActions'
import { getLobbyChannelSelector } from './lobbyChannelSelectors'

const log = curry((msg, payload) => {
  console.log(msg, payload)
  return payload
})

function attachChannelListeners(dispatch, channel) {
  channel.on('presence_state', (state) => {
    dispatch(channelOnPresenceState(state))
  })
  channel.on('presence_diff', pipe(channelOnPresenceDiff, dispatch))
  channel.on('message_new', pipe(prop('body'), addReceivedMessage, dispatch))
  return undefined
}


const createChannelForSocket = store => () => {
  const socket = getSocketSelector(store.getState())
  const channel = socket.channel('room:lobby', {})
  attachChannelListeners(store.dispatch, channel)
  channel.join()
  .receive('ok', pipe(channelOnConnectionSuccess, store.dispatch))
  .receive('error', pipe(channelOnConnectionFailure, store.dispatch))
  return newChannelCreated(channel)
}

function createChannel(action$, store) {
  return select(SOCKET_CREATED, action$)
  .combine(createChannelForSocket(store), select(INIT, action$))
}


const passPayload = f => action => f(action.payload)


function postInfoOnPresenceStateSync(action$) {
  return select(PRESENCE_STATE, action$)
  .map(passPayload(presenceStateSync))
}

function postInfoOnPresenceStateDiff(action$) {
  return select(PRESENCE_DIFF, action$)
  .map(passPayload(presenceStateDiff))
}


const toPack = curry((name, obj) => ({[name]: obj}))
const pack = curry((name, f, obj) => Object.assign({}, obj, {[name]: f(obj)}))


function pushMessage(action$, store) {
  return select(PUSH_MESSAGE, action$)
  .map(toPack('action'))
  .tap(log('action packed'))
  .map(pack('channel', () => getLobbyChannelSelector(store.getState())))
  .tap(log('channel packed'))
  // eslint-disable-next-line fp/no-mutating-methods
  .tap(({ channel, action }) => channel.push('message_new', action.payload))
  .tap(log('message pushed'))
  .map(({ action }) => messagePushed(action.payload))
}

export default combineEpics(
  createChannel,
  postInfoOnPresenceStateSync,
  postInfoOnPresenceStateDiff,
  pushMessage
)
