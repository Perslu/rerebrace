import React from 'react';
// import styles from './styles.css'
import {Link} from 'react-router';

const AppBar = React.createClass({
  render() {
    const props = this.props;
    return (
      <header className="AppBar">
        <h1>{props.title}</h1>
        <nav>
          <Link to="/">Go to home</Link>
          <Link to="/userinfo">Go to profile</Link>
        </nav>
      </header>
    )
  }
});

export default AppBar
