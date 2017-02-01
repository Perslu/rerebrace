import React from 'react'
import {injectSheet, lightFontColor, darkFontColor} from 'UI/styles'

const UILabelForInput = ({label, name, sheet: {classes}, primary, required, ...props}) => {
  const selectStyles = (primary) ? classes.primary : classes.default
  return (<label htmlFor={name} className={classes.labelStyles + ' ' + selectStyles}>
          {label}
          {(required)? (<span className={classes.required}>*</span>) : null}
          </label>)
}

const styles = {
  labelStyles: {
    display: 'inline-block',
    position: 'relative',
    maxWidth: '100%',
    marginBottom: '5',
    fontWeight: '700',
  },
  primary: {
    color: darkFontColor.string(),
  },
  default: {
    color: lightFontColor.string(),
  },
  required: {
    color: '#bf6516',
    fontSize: '11px',
    position: 'relative',
    top: '-5px',
  },
}

UILabelForInput.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  primary: React.PropTypes.bool,
  required: React.PropTypes.bool,
}

export default  injectSheet(styles)(UILabelForInput)
