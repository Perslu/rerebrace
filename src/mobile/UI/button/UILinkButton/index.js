import React from 'react';
import UIButton from '../UIButton'
import { Link } from 'react-router'

const UILinkButton = (props) => <Link to={props.to}><UIButton {...props}/></Link>

UILinkButton.propTypes = {
  type    : React.PropTypes.string,
  onClick : React.PropTypes.func,
  onBlur  : React.PropTypes.func,
  onFocus : React.PropTypes.func,
  disabled: React.PropTypes.bool,
  to      : React.PropTypes.string.isRequired
}

export default UILinkButton
