import React from 'react';
import "./styles.css";

import Section from '../Section';

const SectionLight = (props) => <Section {...props} className="SectionLight">{props.children}</Section>;

export default SectionLight
