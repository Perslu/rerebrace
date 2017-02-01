import React from 'react'
import injectSheet from 'UI/styles/jss'

const UIErrorOrWarning = ({  sheet: {classes}, ...props }) => {
  const {touched, error, warning} = props;
  return <div>
    {touched && ((error && <span className={classes.errorColor}>{error}</span>) || (warning && <span className={classes.warningColor}>{warning}</span>))}
  </div>
};

const styles = {
  errorColor: {
    color: 'red',
    transition: 'all 1.2s ease-in-out',
  },
  warningColor: {
    color: 'orange'
  }
}

UIErrorOrWarning.propTypes = {
 meta: React.PropTypes.shape({
   touched: React.PropTypes.bool,
   error: React.PropTypes.string,
   warning: React.PropTypes.string
 })
};

export default injectSheet(styles) (UIErrorOrWarning)
