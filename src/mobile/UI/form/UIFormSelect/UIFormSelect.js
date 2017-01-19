import React from 'react'
import UIValidationColorResult from 'UI/form/UIValidationColorResult'
import UIErrorOrWarning from 'UI/form/UIErrorOrWarning'
import UILabelForInput from 'UI/form/UILabelForInput'
import {inputStyle, classesForValidatedClass, formSection, formIcon, inputGroup} from 'UI/styles'
import {injectSheet, lightBgColor, darkFontColor, lightFontColor} from 'UI/styles'

const MakeOptions = (options) => {
  let option = options.map(function (opt, i) {
    return <option key={'option-' + i} value={opt.value} disabled={opt.disabled}>{opt.label}</option>;
  });
  return option
}

const UIFormSelect = ({input, label, name, disabled, options, type, value, meta: {touched, error, warning}, sheet: {classes}, primary, requiredFlag, ...props}) => {
  const bgcolor = (primary) ? classes.primary : classes.default
  return (
    <div className={classes.section}>
      <UILabelForInput label={label} name={name} requiredFlag={requiredFlag} primary={primary}/>
      <div className={classes.inputGroup}>
        <select {...input } className={classes[props.validatedClass] + ' ' + classes.select + ' ' + bgcolor}>
          {MakeOptions(options)}
        </select>
      </div>
      <UIErrorOrWarning touched={touched} error={error} warning={warning}/>
    </div>
  );
};

const styles = {
  section: {extend: formSection},
  inputGroup: inputGroup,
  select : {
    extend: [inputStyle],
  },
  primary: {
    backgroundColor: lightBgColor.string(),
    color: darkFontColor.string(),
  },
  default: {
    backgroundColor: lightBgColor.string(),
    color: lightFontColor.string(),
  },
  ...classesForValidatedClass,
}

export default injectSheet(styles)(UIValidationColorResult(UIFormSelect))

