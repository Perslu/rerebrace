import React from 'react';
import LoginPanel from '../../components/LoginPanel';
import { reduxForm } from 'redux-form';


const validate = values => {
  const errors = {};
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

  return errors
};

const LoginPanelView = reduxForm({
  form: 'contact',
  validate
})(LoginPanel);
export default LoginPanelView
