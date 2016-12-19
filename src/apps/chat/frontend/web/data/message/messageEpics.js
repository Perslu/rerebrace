import { NEW } from './messageActionTypes'
import { select, combineEpics } from 'redux-most'
//import {} from 'most'

const pushNewMessagesToChannel = (action$) => {
  
}


export default combineEpics(
  pushNewMessagesToChannel,
)
