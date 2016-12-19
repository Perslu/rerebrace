import { createAction } from '../utils'

import { CREATED } from './lobbyChannelActionTypes'


export function newChannelCreated(message){
  return {
    type: CREATED,
    payload: {
      content: message,
      localTimestamp: Date.now(),
      isAck: false,
    }
  }
}

export const pushNewMessageToChannel = pushedMessage => createAction(NEW_MESSAGE_PUSHED_TO_CHANNEL, pushedMessage)
    
