import React from 'react';
import "./styles.css"
import RegisterButton from '../RegisterButton'
import LoginForm from '../LoginForm'



const LoginPanel = (props) => (
  <div className="LoginPanel">

        <div className="HeaderWelcome">Welcome in Perslu Kingdom </div>
        <div>
          <LoginForm {...props}/>
          <RegisterButton {...props}/>
        </div>


  </div>);

export default LoginPanel
