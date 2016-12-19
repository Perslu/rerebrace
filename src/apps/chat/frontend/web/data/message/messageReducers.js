import {
  NEW,
  ADD_RECEIVED_MESSAGE,
} from './messageActionTypes'


export default function messageReducer(state = {}, { type, payload }) {
  switch (type) {
    case NEW:
      return { ...state, [payload.localId]: payload }
    case ADD_RECEIVED_MESSAGE:
      return { ...state, [payload.localId]: payload }
    default:
      return state
  }
}
