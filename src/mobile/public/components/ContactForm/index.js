import React from 'react'
import "./styles.css"
import {Field, formValueSelector} from 'redux-form'
import {connect} from 'react-redux'
import TextButton from '../TextButton'
import SelectInput from '../SelectInput'
import Textarea from '../Textarea'


const submit = (values) => console.log(values);
const selector = formValueSelector('contactForm');


const renderField = ({ input, label, type, value, meta: { touched, error, warning, invalid, ...other }, ...props }) => {

  const fieldValidityClass=(invalid) ? "fieldInvalid":'fieldValid';
  const fieldStateClass=(touched) ? fieldValidityClass:'fieldInitial';

  return (<div>
    <div>
      <label htmlFor={type}>{label}</label>
      <input {...input}  className={fieldStateClass}  placeholder={props.placeholder} type={type} value={value} label="Napisz wiadomość"/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>);
};


const ContactForm = (props) => {

  return (<div>
    <form  onSubmit={props.handleSubmit(submit)} id="loginForm" className="loginForm">

      <Field component={renderField} type="text" className='email' name="email" placeholder="mail@example.com" label="Email"/>
      <Field component={SelectInput} name="selectInput" label="Select subject"/>
      <Field component={renderField} type="text" className='subject' name="subject" label="Subject" placeholder={props.selectInput}/>

      <Field component={Textarea} name="textarea" cols="40" rows="5" label="Your message"/>


      <TextButton type='submit' tekst='Send Message'> </TextButton>
    </form>
  </div>);
};



export default connect(
  state => ({
    subject: selector(state, 'subject'),
    selectInput: selector(state, 'selectInput')

  })
)(ContactForm)

