import React from 'react'
import  UIErrorOrWarning from '../../../UI/UIErrorOrWarning'
import  UIValidationColorResult from '../../../UI/UIValidationColorResult'




const Textarea = ({ input, label, type, value, meta: { touched, pristine, invalid, error, warning, ...other }, ...props })=> {

  return (
    <div className="contactForm-section">

      <label htmlFor={type}>{label}</label>
      <textarea {...input}  className={props.validatedClass} cols={props.cols} rows={props.rows} value={value}   />
      <UIErrorOrWarning touched={touched} error={error} warning={warning}/>
    </div>
  );
};

export default UIValidationColorResult(Textarea)

