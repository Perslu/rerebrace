import React from 'react'

import  UIValidationColorResult from 'UI/UIValidationColorResult'
import UIErrorOrWarning from 'UI/UIErrorOrWarning'

import injectSheet from 'react-jss'


const Textarea = ({ input, label, type, value, meta: { touched, pristine, invalid, error, warning, ...other }, sheet: {classes}, ...props })=> {

  return (
    <div className="contactForm-section">
      <label htmlFor={type}>{label}</label>
      <textarea {...input}  className={props.validatedClass +" "+ classes.textarea} cols={props.cols} rows={props.rows} value={value}   />
      <UIErrorOrWarning touched={touched} error={error} warning={warning}/>
    </div>
  );
};


const styles = {
  textarea: {
    backgroundColor: 'yellow'
  }
}

export default injectSheet(styles)(UIValidationColorResult(Textarea))


