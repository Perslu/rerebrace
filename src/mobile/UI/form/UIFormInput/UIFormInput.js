import React from 'react'
import UIValidationColorResult from 'UI/form/UIValidationColorResult'
import UIErrorOrWarning from 'UI/form/UIErrorOrWarning'
import UILabelForInput from 'UI/form/UILabelForInput'
import {inputStyle, classesForValidatedClass, formSection, formIcon, inputGroup} from 'UI/styles'
import { injectSheet, lightBgColor, darkBgColor, darkFontColor, lightFontColor} from 'UI/styles'

const UIFormInput = ({ input, type, label, name, meta: { touched, error, warning }, sheet: {classes}, leftAddon, rightAddon, primary, required, ...props }) => {
  const LeftAddon = leftAddon || (() => (<div></div>))
  const RightAddon = rightAddon || (() => (<div></div>))
  const bgcolor = (primary) ? classes.primary : classes.default
  let textInput = null;
  const handleClick = () =>{
     textInput.focus()
  }
  return (<div>
    <div className={classes.section}>
      <UILabelForInput label={label} name={name} required={required} primary={primary}/>
      <div className={classes.inputGroup}>
        <LeftAddon onClick={handleClick} validatedClassname={classes[props.validatedClass]}/>
        <input {...input}
               ref={(input) => { textInput = input; }}
               className={classes[props.validatedClass] +' '+ classes.inputForm +' '+ bgcolor}
               style={{
                 borderLeft: ((leftAddon ) ? 'none' : undefined),
                 paddingLeft: ((leftAddon) ? 0 : undefined),
                 borderRight:((rightAddon) ? 'none' : undefined),
                 paddingRight: ((rightAddon) ? 0 : undefined),
               }}
               type={type}
        />
        <RightAddon onClick={handleClick} validatedClassname={classes[props.validatedClass]}/>
      </div>
      <UIErrorOrWarning touched={touched} error={error} warning={warning}/>
    </div>
  </div>);
};

const styles = {
  section: { extend: formSection},
  noLeftBorder: { borderLeft: 'none'},
  inputGroup: inputGroup,
  inputForm: {
    extend: [inputStyle]
  },
  primary: {
    backgroundColor : lightBgColor.string(),
    color: darkFontColor.string(),
  },
  default: {
    backgroundColor: darkBgColor.string(),
    color: lightFontColor.string(),
  },

  ...classesForValidatedClass,
}

UIFormInput.propTypes = {
  type    : React.PropTypes.string,
  onClick : React.PropTypes.func,
  onBlur  : React.PropTypes.func,
  onFocus : React.PropTypes.func,
  disabled: React.PropTypes.bool,
  primary: React.PropTypes.bool,
  // leftAddon: React.PropTypes.bool,
  // rightAddon: React.PropTypes.bool,
}
export default injectSheet(styles)(UIValidationColorResult(UIFormInput))
