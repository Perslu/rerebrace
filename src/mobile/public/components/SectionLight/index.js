import React from 'react';
import injectSheet from 'UI/styles/jss'

import Section from '../Section';

const SectionLight = ({sheet: {classes}},props) => <Section {...props} className={classes.SectionLight}>{props.children}</Section>;

const styles = {
  SectionLight: {
    background: '#fff'
  }
}

export default  injectSheet(styles)(SectionLight)
