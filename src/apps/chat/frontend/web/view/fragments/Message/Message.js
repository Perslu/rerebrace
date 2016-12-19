import React from 'react'

const Message = ({message}) => (
  message.isAck
    ? <li>{message.content}</li>
    : <li>{message.content}</li>
)


Message.propTypes = {
  message: React.PropTypes.oneOfType([
    React.PropTypes.shape({
      isAck: React.PropTypes.bool.isRequired,
      content: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired,
    }),
    React.PropTypes.shape({
      isAck: React.PropTypes.bool.isRequired,
      content: React.PropTypes.string.isRequired,
      localTimestamp: React.PropTypes.number.isRequired,
    }),
  ])
}

export default Message
