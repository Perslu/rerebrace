import React from 'react'
import  UIErrorOrWarning from '../../../UI/UIErrorOrWarning'
import Icon from "./message_icon.png"

//const onBlur = (value) => {
//  return <div>
//    {(!value)? (console.log('required')):""}
//    </div>
//};


const Textarea = ({ input, label, type, value, meta: { touched, pristine, invalid, error, warning, ...other }, ...props })=> {

  const fieldValidityClass=(invalid) ? "fieldInvalid":'fieldValid';
  const fieldStateClass=(touched) ? fieldValidityClass:'fieldInitial';

  return (
    <div className="contactForm-section">
      <label htmlFor={type} className="contactLabel">{label}</label>
      <textarea {...input} className={fieldStateClass} cols={props.cols} rows={props.rows} value={value}   />
      <UIErrorOrWarning meta={meta}/>
    </div>

  );
};

export default Textarea

