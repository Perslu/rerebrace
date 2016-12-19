import React from 'react'
import {map} from 'ramda'
import Message from '../Message'


//const Message = message => (message.isAck) ? <li key={message.id}>{message.content}</li> : <li key={message.localTimestamp}>{message.content}</li>

const Messages = ({messages}) => {
  return (
    <div >
      <ul id="MessageList" className="list-unstyled">
        {messages.map( message => <Message message={message} key={message.id || message.localTimestamp}/> )}
      </ul>
    </div>
  )
}

Messages.propTypes = {
  messages: React.PropTypes.array.isRequired,
}

export default Messages
