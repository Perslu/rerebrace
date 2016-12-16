import React from 'react'

const UIErrorOrWarning = ({meta: {touched, error, warning}}) => {
  return <div>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
};

UIErrorOrWarning.propTypes = {
  meta: React.PropTypes.shape.isRequired({
    touched: React.PropTypes.bool,
    error: React.PropTypes.string,
    warning: React.PropTypes.string
  })
};

export default UIErrorOrWarning
