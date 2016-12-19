import React from 'react'
import { Field } from 'redux-form'


//const renderField = (field) => {
//  return (
//    <input type="text" id="NewMessage" placeholder="Type and press enter..." className="form-control"/>
//  )
//}




const SendMessage = ({handleSubmit, sendAction, reset, ...props}) => {
  function onSubmit(values) {
    sendAction(values.message)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field name="message" component="input" />
    </form>
  )
}


SendMessage.propTypes = {
  sendAction: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  reset: React.PropTypes.func.isRequired,
  // also other fields from redux-form are available
}

export default SendMessage
