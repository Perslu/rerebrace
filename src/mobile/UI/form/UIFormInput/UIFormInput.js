import React from 'react'
import UIValidationColorResult from 'UI/UIValidationColorResult'
import UIErrorOrWarning from 'UI/UIErrorOrWarning'
import UILabelForInput from 'UI/UILabelForInput'
import injectSheet from 'react-jss'

const UIFormInput = ({ input, type, label, name, meta: { touched, error, warning }, sheet: {classes}, ...props }) => {
  return (<div>
    <div className="section">
      <UILabelForInput label={label} name={name}/>
      <input {...input} className={classes[props.validatedClass] +' '+ classes.inputForm} placeholder={label} type={type}/>
      <UIErrorOrWarning touched={touched} error={error} warning={warning}/>
    </div>
  </div>);
};

const styles = {
  inputForm: {
      width           : '62%',
      padding         : '6px 16px',
      color           : '#909fa7',
      backgroundColor : '#0d1821',
      borderRadius    : '4px',
      boxShadow       : 'inset 1px 2px 0 #0c131b,1px 1px 0 #0b131b',
      webkitTransition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
      transition      : 'border-color ease-in-out .15s,box-shadow ease-in-out .15s'
  },
  fieldInvalid: {
    borderColor: 'red'
  },
  fieldValid: {
    borderColor: 'blue'
  },
  fieldInitial: {
    border:  'none'
  }
}

export default injectSheet(styles)(UIValidationColorResult(UIFormInput))
