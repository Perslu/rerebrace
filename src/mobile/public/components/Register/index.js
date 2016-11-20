import React from 'react'
import "./styles.css"
import TextButton from '../TextButton'
import { Field } from 'redux-form'


const submit = (values) => console.log(values);

const renderField = ({ input, type, meta: { touched, error, warning, invalid, ...other }, ...props }) => {
  console.log(other, props, invalid);

  const fieldValidityClass=(invalid) ? "fieldInvalid":'fieldValid';
  const fieldStateClass=(touched) ? fieldValidityClass:'fieldInitial';


  return (<div>
    <div>
      <input {...input} className={fieldStateClass} placeholder={props.placeholder} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>);
};

const Register = (props) =>{

  return (<div>
    <form onSubmit={props.handleSubmit(submit)} name='contact' id='registerForm'>
      <Field component={renderField}  type="text" name="name" placeholder="Name"/>
      <Field component={renderField} type="text" name="email" placeholder="Email"/>
      <Field component={renderField} type="text" name="password" placeholder="Password (min.6 characters)"/>
      <Field component={renderField} type="text" name="confirmPassword" placeholder="Confirm Password"/>
      <TextButton type='submit' tekst='Create account'>  </TextButton>
    </form>
  </div>);
};


export default Register
