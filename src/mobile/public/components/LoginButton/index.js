import React from 'react';
import "./styles.css";
import {Link} from 'react-router';
import TextButton from '../TextButton'

const LoginButton = (props) => <Link to="/LoginPanel"><TextButton tekst='Login'> </TextButton></Link>;

export default LoginButton

