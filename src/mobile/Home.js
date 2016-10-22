import React from 'react'
import AppBar from './components/AppBar'

class Home extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        <div>And this is home!</div>
      </div>
    );
  }
}

export default Home;
