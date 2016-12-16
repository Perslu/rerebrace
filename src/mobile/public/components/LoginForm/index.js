import React from 'react'
import "./styles.css"
import {Field} from 'redux-form'
import TextButton from '../TextButton'
import { Link } from 'react-router'

const submit = (values) => console.log(values);

const renderField = ({ input, type, meta: { touched, error, warning, invalid, ...other }, ...props }) => {
  console.log(touched,other, props, invalid);

  const fieldValidityClass=(invalid) ? "fieldInvalid":'fieldValid';
  const fieldStateClass=(touched) ? fieldValidityClass:'fieldInitial';

  return (<div>
    <div>
      <input {...input}  className={fieldStateClass} placeholder={props.placeholder} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>);
};

const LoginForm = (props) => {
  return (<div>
    <form  onSubmit={props.handleSubmit(submit)} id="loginForm" className="loginForm">
      <Field component={renderField} type="text" className='email' name="email" placeholder="email" /*label="Email"*//>
      <Field component={renderField} type="text" className='password' name="password" placeholder="password" />
      <TextButton type='submit' tekst='Login'>  </TextButton>
    </form>
    <Link to="/"><div className="ForgotPassword">Forgot your password?</div></Link>
  </div>);
};
export default LoginForm
