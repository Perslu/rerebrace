import React from 'react'

const UIErrorOrWarning = (props) => {
  const {touched, error, warning} = props;
  return <div>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
};

UIErrorOrWarning.propTypes = {
  meta: React.PropTypes.shape({
    touched: React.PropTypes.bool,
    error: React.PropTypes.string,
    warning: React.PropTypes.string
  })
};

export default UIErrorOrWarning
