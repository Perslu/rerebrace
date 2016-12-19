import React from 'react'

const  UIValidationColorResult = (Comp) => (props) => {
  const {touched, invalid} = props.meta;
  const validatedClass = (touched) ? ((invalid) ? "fieldInvalid":'fieldValid'):'fieldInitial';
  return <Comp {...props} validatedClass={validatedClass}/>
};

//UIValidationColorResult.propTypes = {
//  touched: React.PropTypes.bool,
//  invalid: React.PropTypes.bool
//};

export default UIValidationColorResult


