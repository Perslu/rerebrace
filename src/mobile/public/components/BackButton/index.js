import React from 'react';
import FaBack from 'react-icons/fa/arrow-left';
import IconButton from '../IconButton';
import {Link} from 'react-router';
import "./styles.css"


const BackButton = ({onClick, size}) =>
  <Link to="/" onClick={onClick}>
    <div className="BackButton">
      <FaBack color="#eee" size={size}/>
    </div>
  </Link>;
export default BackButton
