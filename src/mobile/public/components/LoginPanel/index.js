import React from 'react'
import RegisterButton from '../RegisterButton'
import LoginForm from '../LoginForm'
import injectSheet from 'UI/styles/jss'

const LoginPanel = ({sheet: {classes}, ...props}) => (
  <div className={classes.loginPanel}>
    <div className={classes.headerWelcome}> Welcome in Perslu Kingdom</div>
    <div>
      <LoginForm {...props}/>
      <RegisterButton {...props}/>
    </div>
  </div>);

const styles = {
  loginPanel   : {
    width          : '350px',
    height         : '450px',
    margin         : 'auto',
    padding        : '10px 15px',
    textAlign      : 'center',
    backgroundColor: '#121d26'
  },
  headerWelcome: {
    fontSize       : '1.5rem',
    backgroundColor: '#08081c',
    padding        : '15px 0'
  },
}

export default injectSheet(styles)(LoginPanel)
