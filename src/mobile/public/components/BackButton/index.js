import React from 'react';
import FaBack from 'react-icons/fa/arrow-left';
import IconButton from '../IconButton';
import {Link} from 'react-router';


const BackButton = ({onClick, size}) => <Link to="/"><IconButton onClick={onClick}> <FaBack color="#eee" size={size} /> </IconButton></Link>;
export default BackButton
