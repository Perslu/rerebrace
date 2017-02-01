import React from 'react'
import {Field, formValueSelector} from 'redux-form'
import {connect} from 'react-redux'
import UIFormSelect from 'UI/form/UIFormSelect'
import UIFormTextarea from 'UI/form/UIFormTextarea'
import UIFormInput from 'UI/form/UIFormInput'
import UIButton from 'UI/button/UIButton'
import UIFormInputIconAddon from 'UI/form/UIFormInputIconAddon'
import EmailIcon from 'react-icons/fa/envelope-o'
import AppleIcon from 'react-icons/fa/apple'

const submit = (values) => console.log(values);
const selector = formValueSelector('contactForm');

const arr = [
  {value:'', label:''},
  {value:'Grapefruit', label:'Grapefruit'},
  {value:'Lime', label:'Lime'},
  {value:'Coconut', label:'Coconut'},
  {value:'Mango', label:'Mango'},
  {value:'Mango2', label:'Mango2'},
]
const PassComponent = (props) => {

}
const ContactForm = (props) => {
  return (<div>
    <form onSubmit={props.handleSubmit(submit)} id='loginForm' name="form">
      <Field component={UIFormInput} type="text" name="email"  label="Email" required primary
             leftAddon={(props) => <UIFormInputIconAddon {...props} icon={EmailIcon} left/>}
             rightAddon={(props) => <UIFormInputIconAddon {...props} icon={AppleIcon} right/>}
      />
      <Field component={UIFormSelect} primary name="selectInput" label="Select subject" options={arr} required/>
      <Field component={UIFormInput} primary type="text" name="subject" label="Subject" placeholder={props.selectInput} required/>
      <Field component={UIFormTextarea} primary name="textarea"  cols="20" rows="5" label="Your message" required/>
      <UIButton primary type='submit'>Send Message</UIButton>
    </form>
  </div>);
};

export default connect(
  state => ({
    subject: selector(state, 'subject'),
    selectInput: selector(state, 'selectInput')
  })
)(ContactForm)

