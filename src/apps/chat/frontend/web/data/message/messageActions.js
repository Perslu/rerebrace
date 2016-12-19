import { createWrappedAction } from '../utils'

import { NEW, ADD_RECEIVED_MESSAGE } from './messageActionTypes'


const randomId = now => now.toString().concat('_').concat(Math.floor(Math.random() * 1000000))

export function sendNewMessage(message) {
  const now = Date.now()
  return {
    type: NEW,
    payload: {
      content: message,
      localTimestamp: now,
      isAck: false,
      localId: randomId(now),
    },
  }
}

export const addReceivedMessage = createWrappedAction(ADD_RECEIVED_MESSAGE)
