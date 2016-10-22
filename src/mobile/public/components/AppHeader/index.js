import React from 'react';
import "./styles.css";
import logo from '../../../assets/logo.png'

const AppHeader = (props) => (
  <div className="AppHeader">
    <img src={logo} alt="logo" />
    {/*<div>{props.children}<div>*/}
    </div>
);

export default AppHeader
