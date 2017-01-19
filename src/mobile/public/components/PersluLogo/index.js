import React from 'react';
import logo from '../../../assets/logo.png'
import injectSheet from 'UI/styles/jss'

const PersluLogo = ({sheet: {classes}, ...props}) => <img src={logo} alt="logo" className={classes.persluLogo}/>;

const styles = {
  persluLogo: {
    height: '50px',
  },
}
export default injectSheet(styles)(PersluLogo)
