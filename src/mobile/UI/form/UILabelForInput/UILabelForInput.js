import React from 'react'
import {injectSheet, lightFontColor, darkFontColor} from 'UI/styles'

const UILabelForInput = ({label, name, sheet: {classes}, primary, requiredFlag, ...props}) => {
  const selectStyles = (primary) ? classes.primary : classes.default
  const requiredFlagClass = (requiredFlag) ? classes.requiredFlag : classes.defaultrequireFlag
  return (<label htmlFor={name} className={classes.labelStyles + ' ' + selectStyles}> {label} <span
    className={requiredFlagClass}>*</span> </label>)
}

const styles = {
  labelStyles       : {
    display     : 'inline-block',
    position    : 'relative',
    maxWidth    : '100%',
    marginBottom: '5',
    fontWeight  : '700',
  },
  primary           : {
    color: darkFontColor.string(),
  },
  default           : {
    color: lightFontColor.string(),
  },
  defaultrequireFlag: {
    display: 'none',
  },
  requiredFlag      : {
    color   : '#bf6516',
    fontSize: '11px',
    position: 'relative',
    top     : '-5px',
  },
}

export default  injectSheet(styles)(UILabelForInput)
