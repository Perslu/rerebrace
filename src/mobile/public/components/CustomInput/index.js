import React from 'react'


const CustomInput = ( props) => {
  return (
    <div>

    <input type={props.type} className={props.className}  name="email" placeholder="email" onChange={props.handleSubmit}/>
      {props.touched && props.error && <span className="error">{props.error}</span>}
    </div>
  )
};

export default CustomInput
