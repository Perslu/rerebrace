import React from 'react'

class ChatLobbyChannel extends React.PureComponent {
  componentDidMount() {
    this.props.init()
  }
  componentWillUnmount() {
    this.props.destroy()
  }
  
  render() {return <div></div> }
}


ChatLobbyChannel.propTypes = {
  init: React.PropTypes.func.isRequired,
  destroy: React.PropTypes.func.isRequired,
}

export default ChatLobbyChannel
