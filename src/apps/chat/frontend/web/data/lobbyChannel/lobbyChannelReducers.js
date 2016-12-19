import {
  CREATED,
  CONNECTED,
  CONNECTING_ERROR,
  DISCONNECTED,
  MESSAGE_RECEIVED,
  PRESENCE_DIFF,
  PRESENCE_STATE,
} from './lobbyChannelActionTypes'


export default function lobbyChannelReducer(state = {}, {type, payload, meta}) {
  switch (type) {
    case CREATED: return {...payload, state: CREATED}
    case CREATED: return {...payload, state: CREATED}
    default: return state;
  }
}
