import {
  CREATED,
  CONNECTED,
  CONNECTING_ERROR,
  DISCONNECTED,
  MESSAGE_RECEIVED,
  PRESENCE_DIFF,
  PRESENCE_STATE,
} from './socketActionTypes'


export default function socketReducer(state = { ready: false }, { type, payload, meta }) {
  switch (type) {
    case CREATED:
      return { ...payload, ready: true }
    default:
      return state
  }
}
