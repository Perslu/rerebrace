import React from 'react'
import { Field, reduxForm  } from 'redux-form';
import { formValueSelector } from 'redux-form'
import {connect} from 'react-redux';

import BookingCalendar from '../BookingCalendar'
import DateTimeMoment from '../DateTimeMoment'
import ProfileRatesForm from '../ProfileRatesForm'

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length <6) {
    errors.name = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
};

const renderField = ({ input, label, type, meta: { touched, error, invalid } }) => {

   const fieldValidityClass = (invalid) ? "fieldInvalid" : 'fieldValid';
   const className =(touched) ? fieldValidityClass : 'fieldInitial';

  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} className={className} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )
};
const renderError = ({ meta: { touched, error } }) => touched && error ? <span>{error}</span> : false
const renderSelectList = ({meta: { touched, error}  })=> touched && error ? <span>{error}</span> : false
const submit = (values) => {console.log('success', values)}

const HotelAddress = () => {
  return <div>
    <Field name="city" component={renderField} type="text" label="City"/>
    <Field name="streetName" component={renderField} type="text" label="Street name"/>
    <Field name="number" component={renderField} type="text" label="Number"/>
    <Field name="roomNumber" type="text" component={renderField} label="Room number"/>
  </div>
};
const ApartmentAddress = () => {
  return <div>
    <Field name="city" component={renderField} type="text" label="City"/>
    <Field name="streetName" component={renderField} type="text" label="Street number"/>
    <Field name="number" component={renderField} type="text" label="Number"/>
    <Field name="roomNumber" type="text" component={renderField} label="Room number"/>
  </div>
};
const PublicArea =() => {
  return <div>
    <Field name="city" component={renderField} type="text" label="City"/>
    <Field name="streetName" component={renderField} type="text" label="Street name"/>
    <Field name="place" component={renderField} type="text" label="Meeting place name"/>
  </div>
};
const ChoosePlase = (props) =>{
  return <div>
    {(props.meetingPlace==='apartment')? <ApartmentAddress/>: null}
    {(props.meetingPlace==='hotel')? <HotelAddress/>: null}
    {(props.meetingPlace==='public')? <PublicArea/>: null}
  </div>
};
const selector = formValueSelector('syncValidation');
const ChoosePlases = connect(
  state => ({
    meetingPlace: selector(state, 'meetingPlace'),
  })
)(ChoosePlase);

const BookingArea = (props) => {
  const { handleSubmit, submitting,otherValue } = props;

  return (
    <form onSubmit={handleSubmit(submit)} >
      <Field name="dateTimeMoment" component={DateTimeMoment} label="Date and time"/>
      <Field name="name" type="text" component={renderField} label="Name"/>
      <Field name="email" type="email" component={renderField} label="Email"/>
      <Field name="phone" type="number" component={renderField} label="Phone"/>

      <div>
        <label><Field name="meetingPlace" component='input' type="radio" value="hotel"/> Hotel</label>
        <label><Field name="meetingPlace" component='input' type="radio" value="apartment"/> Apartment</label>
        <label><Field name="meetingPlace" component='input' type="radio" value="public"/> Public area</label>
        <ChoosePlases/>
      </div>

      <button type="submit">Submit</button>

    </form>
  )
};


export default reduxForm({
  form: 'syncValidation',
  validate,
  initialValues :{
    meetingPlace: "hotel"
  }

})(BookingArea)

