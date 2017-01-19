import React from 'react';
import injectSheet from 'react-jss'

const UIButton = ({sheet: {classes}, ...props}) =>
  <button className={classes.button} type='button' {...props}>{props.children}</button>

const styles = {
  button: {
    width          : '100%',
    fontSize       : '.8rem',
    color          : 'rgb(229, 193, 83)',
    cursor         : 'pointer',
    backgroundColor: '#962a00',
    border         : 'none',
    padding        : '8px',
    borderRadius   : '3px',
    outline        : 'none',
    boxShadow      : '2px 2px 3px 0 rgba(0,0,0,0.41)',
    transition     : 'all 0.2s',
    '&:hover'      : {
      backgroundColor: '#851900'
    }
  }
}

UIButton.propTypes = {
  type    : React.PropTypes.string,
  onClick : React.PropTypes.func,
  onBlur  : React.PropTypes.func,
  onFocus : React.PropTypes.func,
  disabled: React.PropTypes.bool,

}
export default injectSheet(styles)(UIButton)

