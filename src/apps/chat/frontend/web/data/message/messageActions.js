import { createAction } from '../utils'

import { NEW, NEW_MESSAGE_PUSHED_TO_CHANNEL } from './messageActionTypes'


export function sendNewMessage(message){
  return {
    type: NEW,
    payload: {
      content: message,
      localTimestamp: Date.now(),
      isAck: false,
    }
  }
}

export const pushNewMessageToChannel = pushedMessage => createAction(NEW_MESSAGE_PUSHED_TO_CHANNEL, pushedMessage)
    
