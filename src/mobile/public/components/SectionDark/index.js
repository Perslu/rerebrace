import React from 'react';
import "./styles.css";

import Section from '../Section';

const SectionDark = (props) => <Section {...props} className="SectionDark">{props.children}</Section>;

export default SectionDark
