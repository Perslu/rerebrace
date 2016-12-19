import React from 'react'

import ActiveUsers from 'view/fragments/ActiveUsers'
import SendMessage from 'view/fragments/SendMessage'
import Messages from 'view/fragments/Messages'
import ChatLobbyChannel from 'view/fragments/ChatLobbyChannel'


const ChatScreen = (props) => {
  return (
    <div>
      <ChatLobbyChannel init={props.initLobbyChannel} destroy={props.destroyLobbyChannel}/>
      <div>
        <h2>Messages</h2>
        <Messages messages={props.messages}/>
        <SendMessage sendAction={props.sendNewMessage}/>
      </div>
      
      <div>
        <h2>Who’s Online</h2>
        <ActiveUsers users={props.users}/>
      </div>
    
    </div>
  )
}


ChatScreen.propTypes = {
  //data
  users: React.PropTypes.array.isRequired,
  messages: React.PropTypes.array.isRequired,
  //actions
  sendNewMessage: React.PropTypes.func.isRequired,
  initLobbyChannel: React.PropTypes.func.isRequired,
  destroyLobbyChannel: React.PropTypes.func.isRequired,
}

export default ChatScreen
