import React from 'react'
import {Field, formValueSelector} from 'redux-form'
import {connect} from 'react-redux';
//const handleChange=(event)=> {
//  this.setState({value: event.target.value});
//};


const SelectInput =({ input, label, type, value, meta: {  visited, pristine, invalid, touched, error, submitting, ...other }, ...props })=> {


  const fieldValidityClass=(invalid) ? "fieldInvalid":'fieldValid';
  const fieldStateClass=(touched) ? fieldValidityClass:'fieldInitial';

  return (
    <div>
      <label {...input } htmlFor={name}>{label}</label>
      <select {...input }  className={fieldStateClass}>
        <option value=""> </option>
        <option value="Grapefruit">Grapefruit</option>
        <option value="Lime">Lime</option>
        <option value="Coconut">Coconut</option>
        <option value="Mango">Mango</option>
      </select>

      {touched && (error && <span>{error}</span>) }
    </div>

  );

};

export default SelectInput
