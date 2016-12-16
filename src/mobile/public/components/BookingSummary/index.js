import React from 'react';
import { formValueSelector } from 'redux-form'
import {connect} from 'react-redux';


const selector = formValueSelector('booking');

const BookingSummary =(props)=>(
  <div>
    <div>Price:{props.price}</div>
    <div>Date:{props.date}</div>
    <div>Time:{props.time}</div>


    <div>Total:</div>
  </div>
);

export default connect(
  state => ({
    date: selector(state, 'date'),
    time: selector(state, 'time')
  })
)(BookingSummary)


