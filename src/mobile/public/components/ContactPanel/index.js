import React from 'react';
import "./styles.css"
import ContactForm from '../ContactForm'



const ContactPanel = (props) => (
  <div className="LoginPanel">

    <div className="HeaderWelcome">Contact us </div>
    <div>
      <ContactForm {...props}/>
    </div>


  </div>);

export default ContactPanel
