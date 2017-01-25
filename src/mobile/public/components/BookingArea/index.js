import React from 'react'
import { Field, reduxForm  } from 'redux-form';
import { formValueSelector } from 'redux-form'
import {connect} from 'react-redux';
import UIDateTimeMoment from 'UI/form/UIDateTimeMoment'
import UIFormInput from 'UI/form/UIFormInput'
import UIButton from 'UI/button/UIButton'

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
  if (!values.phone) {
    errors.phone = 'Required'
  } else if (values.phone.length <7) {
    errors.phone = 'Must be min 8 characters'
  }
  if (!values.city) {
    errors.city = 'Required'
  }
  if (!values.streetName) {
    errors.streetName = 'Required'
  }
  if (!values.number) {
    errors.number = 'Required'
  }
  if (!values.roomNumber) {
    errors.roomNumber = 'Required'
  }
  if (!values.place) {
    errors.place = 'Required'
  }
  if (!values.UIDateTimeMoment) {
    errors.UIDateTimeMoment = 'Required'
  }
  return errors
};

const submit = (values) => {console.log('success', values)}

const HotelAddress = () => {
  return <div>
    <Field name="city" component={UIFormInput} type="text" label="City"/>
    <Field name="streetName" component={UIFormInput} type="text" label="Street name"/>
    <Field name="number" component={UIFormInput} type="text" label="Number"/>
    <Field name="roomNumber" type="text" component={UIFormInput} label="Room number"/>
  </div>
};
const ApartmentAddress = () => {
  return <div>
    <Field name="city" component={UIFormInput} type="text" label="City"/>
    <Field name="streetName" component={UIFormInput} type="text" label="Street number"/>
    <Field name="number" component={UIFormInput} type="text" label="Number"/>
    <Field name="roomNumber" type="text" component={UIFormInput} label="Room number"/>
  </div>
};
const PublicArea =() => {
  return <div>
    <Field name="city" component={UIFormInput} type="text" label="City"/>
    <Field name="streetName" component={UIFormInput} type="text" label="Street name"/>
    <Field name="place" component={UIFormInput} type="text" label="Meeting place name"/>
  </div>
};
const ChoosePlase = (props) =>{
  return <div>
    {(props.meetingPlace==='apartment')? <ApartmentAddress/>: null}
    {(props.meetingPlace==='hotel')? <HotelAddress/>: null}
    {(props.meetingPlace==='public')? <PublicArea/>: null}
  </div>
};
const selector = formValueSelector('bookingForm');
const ChoosePlases = connect(
  state => ({
    meetingPlace: selector(state, 'meetingPlace'),
  })
)(ChoosePlase);

const BookingArea = (props) => {
  return (
    <form onSubmit={props.handleSubmit(submit)} id='bookingForm' name="bookingForm">
      <Field name="UIDateTimeMoment" component={UIDateTimeMoment} label="Date and time"/>
      <Field name="name" type="text" component={UIFormInput} label="Name"/>
      <Field name="email" type="email" component={UIFormInput} label="E-mail"/>
      <Field name="phone" type="number" component={UIFormInput} label="Phone"/>

      <div>
        <label><Field name="meetingPlace" component='input' type="radio" value="hotel"/> Hotel</label>
        <label><Field name="meetingPlace" component='input' type="radio" value="apartment"/> Apartment</label>
        <label><Field name="meetingPlace" component='input' type="radio" value="public"/> Public area</label>
        <ChoosePlases/>
      </div>
      <UIButton type='submit'>Book now</UIButton>

    </form>
  )
};

export default reduxForm({
  form: 'bookingForm',
  validate,
  initialValues :{
    meetingPlace: "hotel"
  }
})(BookingArea)

