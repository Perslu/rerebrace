import React from 'react';
import "./styles.css";

import Section from '../Section';


const SectionDark = (props) => <Section {...props} className="SectionDark">{props.children}</Section>;

SectionDark.PropTypes = {
  mb: React.PropTypes.number,
  ml: React.PropTypes.number,
  mr: React.PropTypes.number,
  mt: React.PropTypes.number,
  pb: React.PropTypes.number,
  pl: React.PropTypes.number,
  pr: React.PropTypes.number,
  pt: React.PropTypes.number,
};
export default SectionDark
