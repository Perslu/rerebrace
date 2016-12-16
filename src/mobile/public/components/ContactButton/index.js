import React from 'react';
import {Link} from 'react-router';
import TextButton from '../TextButton'

const ContactButton = (props) => <Link to="/ContactPanel"><TextButton tekst='Contact'> </TextButton></Link>;

export default ContactButton
