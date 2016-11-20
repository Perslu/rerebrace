import React from 'react';
import Register from '../../components/Register';
import { reduxForm } from 'redux-form';


const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length <6) {
  errors.password = 'Must be minimum 6 characters'
}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if(!values.confirmPassword) {
    errors.confirmPassword = 'Required'
  }else if (values.confirmPassword!==values.password){
    errors.confirmPassword = 'Given new passwords doesn\'t match'
  }

  return errors
};

const RegisterView = reduxForm({
  form: 'registerForm',
  validate
})(Register);
export default RegisterView
