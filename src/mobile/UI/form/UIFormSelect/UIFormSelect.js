import React from 'react'
import UIValidationColorResult from 'UI/UIValidationColorResult'
import UIErrorOrWarning from 'UI/UIErrorOrWarning'
import UILabelForInput from 'UI/UILabelForInput'
import injectSheet from 'react-jss'
import {inputStyle, greenText, classesForValidatedClass} from 'UI/styles'


const MakeOptions = (options) => {

  let option = options.map(function (opt, i) {
    return <option key={'option-' + i} value={opt.value} disabled={opt.disabled}>{opt.label}</option>;
  });
  return option
}

const UIFormSelect =({ input, label, name,disabled,options, type, value, meta: { touched, error, warning},  sheet: {classes}, ...props }) => {

  return (
    <div className="section">
      <UILabelForInput label={label} name={name}/>
      <select {...input }  className={classes[props.validatedClass]+" "+ classes.select}>
        {MakeOptions(options)}
      </select>
      <UIErrorOrWarning touched={touched} error={error} warning={warning}/>
    </div>
  );
};

console.log(inputStyle);
const styles = {
  // select: inputStyle,
  select: { extend: [inputStyle, greenText],

    //color:'orange'
  },
  ...classesForValidatedClass

}

export default injectSheet(styles)(UIValidationColorResult(UIFormSelect))

