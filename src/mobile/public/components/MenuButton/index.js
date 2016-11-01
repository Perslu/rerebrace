import React from 'react';
import FaMenu from 'react-icons/fa/bars';
import './styles.css'

const MenuButton = (props) =>
  <div className="MenuButton">
    <FaMenu size={props.size}/>
  </div>
export default MenuButton
