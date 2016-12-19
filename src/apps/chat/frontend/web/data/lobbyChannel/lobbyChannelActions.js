import { createWrappedAction } from '../utils'

import {
  CREATED,
  INIT,
  DESTROY,
  CONNECTING_SUCCESS,
  CONNECTING_FAILURE,
  DISCONNECTED,
  PRESENCE_STATE,
  PRESENCE_DIFF,
  PUSH_MESSAGE,
} from './lobbyChannelActionTypes'


export const initLobbyChannel = createWrappedAction(INIT)
export const destroyLobbyChannel = createWrappedAction(DESTROY)
export const channelOnConnectionSuccess = createWrappedAction(CONNECTING_SUCCESS)
export const channelOnConnectionFailure = createWrappedAction(CONNECTING_FAILURE)
export const channelOnPresenceState = createWrappedAction(PRESENCE_STATE)
export const channelOnPresenceDiff = createWrappedAction(PRESENCE_DIFF)


export function newChannelCreated(channel){
  return {
    type: CREATED,
    payload: {
      channel,
      localTimestamp: Date.now(),
    }
  }
}

//export const pushNewMessageToChannel = pushedMessage => createAction(NEW_MESSAGE_PUSHED_TO_CHANNEL, pushedMessage)
    
