import React from 'react'
import {Field} from 'redux-form'
import UIFormInput from 'UI/form/UIFormInput'
import UIButton from 'UI/button/UIButton'

const submit = (values) => console.log(values);

const Register = (props) => {
  return <div>
    <form onSubmit={props.handleSubmit(submit)} id='registerForm' name="form">
      <Field component={UIFormInput} type="text" name="name" label="Name"/>
      <Field component={UIFormInput} type="text" name="email" label="E-mail"/>
      <Field component={UIFormInput} type="text" name="password" label="Password"/>
      <Field component={UIFormInput} type="text" name="confirmPassword" label="Confirm password"/>
      <UIButton type='submit'>Create account</UIButton>
    </form>
  </div>;
};

export default Register
