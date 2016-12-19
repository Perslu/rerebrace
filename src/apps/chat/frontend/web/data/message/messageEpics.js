import { NEW } from './messageActionTypes'
import { select, combineEpics } from 'redux-most'
//import {} from 'most'
import { pushMessage } from 'data/lobbyChannel/lobbyChannelActions'



const passPayload = f => action => f(action.payload)

const pushNewMessagesToChannel = action$ => select(NEW, action$)
  .map(passPayload(pushMessage))




export default combineEpics(
  pushNewMessagesToChannel
)
