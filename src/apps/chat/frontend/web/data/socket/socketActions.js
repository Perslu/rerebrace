import { createAction } from '../utils'

import { CREATED, INIT } from './socketActionTypes'


export const initSocket = address => createAction(INIT, address)


export function socketCreated(socket){
  return {
    type: CREATED,
    payload: {
      socket: socket,
      localTimestamp: Date.now(),
    }
  }
}

//export const pushNewMessageToChannel = pushedMessage => createAction(NEW_MESSAGE_PUSHED_TO_CHANNEL, pushedMessage)
    
