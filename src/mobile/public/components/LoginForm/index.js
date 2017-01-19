import React from 'react'
import {Field} from 'redux-form'
import {Link} from 'react-router'
import injectSheet from 'UI/styles/jss'
import UIFormInput from 'UI/form/UIFormInput'
import UIButton from 'UI/button/UIButton'

const submit = (values) => console.log(values);

const LoginForm = ({sheet: {classes}, ...props}) => {
  return (<div>
    <form onSubmit={props.handleSubmit(submit)} id='loginForm' name="form">
      <Field component={UIFormInput} type="text" name="email" placeholder="e-mail" label="Email"/>
      <Field component={UIFormInput} type="text" name="password" placeholder="password" label="Password"/>
      <UIButton type='submit'>Login</UIButton>
    </form>
    <Link to="/" className={classes.aLink}>
      <div className={classes.ForgotPassword}>Forgot your password?</div>
    </Link>
  </div>);
};

const styles = {
  ForgotPassword: {
    marginBottom: '40px',
    color       : '#909fa7',
    textAlign   : 'right',
    fontSize    : '.9rem',
  },
  aLink         : {
    textDecoration: 'none',
  }
}

export default injectSheet(styles)(LoginForm)
