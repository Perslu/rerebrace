import React from 'react';
import ContactForm from '../ContactForm'
import SectionDark from '../SectionDark'
import SectionHeader from '../SectionHeader'

const ContactPanel = (props) => (
  <div>
    <SectionHeader text="contact info" primary />
    <SectionDark pl={100} pr={100} pt={20} pb={20} primary>
        <ContactForm {...props}/>
    </SectionDark>
  </div>);


export default ContactPanel
