import React from 'react';
import "./styles.css";
import TextButton from '../TextButton'
import { Link } from 'react-router'

const RegisterButton = (props) =>
  <div>
    <div >Don't have account?</div>
    <Link to="/RegisterMemberKind"><TextButton tekst='Register now' >  </TextButton></Link>
  </div>;

export default RegisterButton


