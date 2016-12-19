import { CONNECTED } from './userConstants'


export default function userReducer(state = [], action) {
  switch (action.type) {
    case CONNECTED:
      return state.concat([action.payload])
    default:
      return state
  }
}
