import React from 'react'
import { reduxForm } from 'redux-form'
import SendMessage from './SendMessage'

const validate = ({message}) => ({message: (!message) ? "Required" : undefined })

export default reduxForm({
  form: 'chatSendMessage',
  validate
})(SendMessage)
