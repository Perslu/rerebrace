import React from 'react'
import UIValidationColorResult from 'UI/form/UIValidationColorResult'
import UIErrorOrWarning from 'UI/form/UIErrorOrWarning'
import UILabelForInput from 'UI/form/UILabelForInput'
import {inputStyle, classesForValidatedClass, formSection, formIcon, inputGroup} from 'UI/styles'
import {injectSheet, lightBgColor, darkFontColor, lightFontColor} from 'UI/styles'

const UIFormTextarea = ({input, label, name, value, meta: {touched, error, warning}, sheet: {classes}, primary, required, ...props}) => {
  const selectStyles = (primary) ? classes.primary : classes.default
  return (
    <div className={classes.section}>
      <UILabelForInput label={label} name={name} required={required} primary={primary}/>
      <div className={classes.inputGroup}>
        <textarea {...input} className={classes[props.validatedClass] + ' ' + classes.textarea + ' ' + selectStyles}
                  cols={props.cols} rows={props.rows} value={value}/>
      </div>
      <UIErrorOrWarning touched={touched} error={error} warning={warning}/>
    </div>
  );
};

const styles = {
  section : {extend: formSection},
  inputGroup: inputGroup,
  textarea: {extend: [inputStyle]},
  primary : {
    backgroundColor: lightBgColor.string(),
    color: darkFontColor.string(),
  },
  default : {
    backgroundColor: lightBgColor.string(),
    color: lightFontColor.string(),
  },
  ...classesForValidatedClass,
}

UIFormTextarea.propTypes = {
  type    : React.PropTypes.string,
  onClick : React.PropTypes.func,
  onBlur  : React.PropTypes.func,
  onFocus : React.PropTypes.func,
  disabled: React.PropTypes.bool,
  primary: React.PropTypes.bool,
}

export default injectSheet(styles)(UIValidationColorResult(UIFormTextarea))



