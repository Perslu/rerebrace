import React from 'react';
import ContactPanel from '../../components/ContactPanel';
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
  if (!values.subject) {
    errors.subject = 'Required'
  }
  if (!values.selectSubject) {
    errors.selectSubject = 'Required'
  }
  if (!values.selectInput) {
    errors.selectInput = 'Required'
  }
  if (!values.textarea) {
    errors.textarea = 'Required'
  }
  return errors
};

const ContactPanelView = reduxForm({
  form: 'contactForm',
  validate,
  initialValues :{
    selectInput: "Coconut"
  }
  })(ContactPanel);
export default ContactPanelView
