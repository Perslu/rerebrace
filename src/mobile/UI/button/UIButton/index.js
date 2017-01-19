import React from 'react';
import { injectSheet, primaryColor, lightFontColor, darkBgColor, darken } from 'UI/styles'
import {buttonFont} from 'UI/button/styles'

const UIButton = ({sheet: {classes}, primary, ...props}) => {
  const btn = (primary) ? classes.primary : classes.default
  return <button className={classes.button + ' ' + btn} type='button' {...props}>{props.children}</button>
}
const styles = {
  button: {
    width          : '100%',
    fontSize       : buttonFont,
    cursor         : 'pointer',
    border         : 'none',
    padding        : '8px',
    outline        : 'none',
    boxShadow      : '2px 2px 3px 0 rgba(0,0,0,0.41)',
    transition     : 'all 0.2s',
  },
  primary: {
    color          : lightFontColor.string(),
    backgroundColor: primaryColor.string(),
    '&:hover'      : {
      backgroundColor: darken(primaryColor,10).string(),
    },
  },
  default: {
    color          : 'rgb(229, 193, 83)',
    backgroundColor: '#962a00',
    '&:hover'      : {
      backgroundColor: '#851900',
    },
  }
}

UIButton.propTypes = {
  type    : React.PropTypes.string,
  onClick : React.PropTypes.func,
  onBlur  : React.PropTypes.func,
  onFocus : React.PropTypes.func,
  disabled: React.PropTypes.bool,
  primary: React.PropTypes.bool,
}
export default injectSheet(styles)(UIButton)

