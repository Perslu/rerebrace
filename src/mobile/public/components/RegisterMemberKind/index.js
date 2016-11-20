import React from 'react';
import TextButton from '../TextButton'
import { Link } from 'react-router'

const RegisterMemberKind = (props) =>
  <div>
    <Link to="/Register"><TextButton tekst='Member'> Member </TextButton></Link>
    <Link to="/Register"><TextButton tekst='Lady'>  </TextButton></Link>
    <Link to="/Register"><TextButton tekst='Agency'>  </TextButton></Link>
  </div>;

export default RegisterMemberKind
