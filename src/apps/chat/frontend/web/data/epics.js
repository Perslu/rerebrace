import { combineEpics } from 'redux-most'
import socket from './socket/socketEpics'
import lobbyChannel from './lobbyChannel/lobbyChannelEpics'
import currentUser from './currentUser/currentUserEpics'
import message from './message/messageEpics'
import user from './user/userEpics'

export default combineEpics(
  socket,
  lobbyChannel,
  currentUser,
  //message,
  user,
)
