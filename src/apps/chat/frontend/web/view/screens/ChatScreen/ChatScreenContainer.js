import { connect } from 'react-redux'
import { getAllMessagesSelector } from 'data/message/messageSelectors'
import { sendNewMessage } from 'data/message/messageActions'
import { getAllUsersSelector } from 'data/user/userSelectors'
import { initLobbyChannel, destroyLobbyChannel } from 'data/lobbyChannel/lobbyChannelActions'

import ChatScreen from './ChatScreen'


function mapStateToProps(state, props) {
  return {
    users: getAllUsersSelector(state, props),
    messages: getAllMessagesSelector(state, props),
  }
}

export default connect(mapStateToProps, { sendNewMessage, initLobbyChannel, destroyLobbyChannel })(ChatScreen)
