import { NEW } from './messageActionTypes'


export default function messageReducer(state = [], action) {
  switch (action.type) {
    case NEW:
      return state.concat([action.payload]);
    default:
      return state;
  }
}
