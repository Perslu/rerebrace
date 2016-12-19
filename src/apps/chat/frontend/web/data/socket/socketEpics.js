import { select, combineEpics } from 'redux-most'
import { Socket } from 'phoenix'

import { INIT } from './socketActionTypes'
import { socketCreated } from './socketActions'
import { getUserNameSelector } from 'data/currentUser/currentUserSelectors'


const createSocket = (store) => ({payload}) => {
  const name = getUserNameSelector(store.getState())
  const socket = new Socket(payload, {params: {user: name}})
  socket.connect()
  return socket
}

const createSocketOnInit = (action$, store) => {
  return select(INIT, action$)
  .map(createSocket(store))
  .map(socketCreated)
}


export default combineEpics(createSocketOnInit)
