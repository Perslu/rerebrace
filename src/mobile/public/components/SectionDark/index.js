import React from 'react'
import { injectSheet, primaryColor, lightFontColor, darkBgColor, lightBgColor, darken } from 'UI/styles'

import Section from '../Section';

const SectionDark = ({sheet: {classes}, primary, ...props}) =>{
  const selectStyles = (primary) ? classes.primary : classes.default
  return <Section {...props} className={selectStyles}>{props.children}</Section>;
}

const styles = {
  primary: {
    backgroundColor : lightBgColor.string(),
  },
  default: {
    backgroundColor: darkBgColor.string(),
  },
}

export default injectSheet(styles)(SectionDark)
