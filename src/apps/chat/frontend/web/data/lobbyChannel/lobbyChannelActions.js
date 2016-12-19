import { createWrappedAction } from '../utils'

import {
  CREATED,
  INIT,
  DESTROY,
  CONNECTING_SUCCESS,
  CONNECTING_FAILURE,
  PRESENCE_STATE,
  PRESENCE_DIFF,
  PUSH_MESSAGE,
  MESSAGE_PUSHED,
} from './lobbyChannelActionTypes'


export const initLobbyChannel = createWrappedAction(INIT)
export const destroyLobbyChannel = createWrappedAction(DESTROY)
export const channelOnConnectionSuccess = createWrappedAction(CONNECTING_SUCCESS)
export const channelOnConnectionFailure = createWrappedAction(CONNECTING_FAILURE)
export const channelOnPresenceState = createWrappedAction(PRESENCE_STATE)
export const channelOnPresenceDiff = createWrappedAction(PRESENCE_DIFF)
export const pushMessage = createWrappedAction(PUSH_MESSAGE)
export const messagePushed = createWrappedAction(MESSAGE_PUSHED)


export function newChannelCreated(channel) {
  return {
    type: CREATED,
    payload: {
      channel,
      localTimestamp: Date.now(),
    },
  }
}
