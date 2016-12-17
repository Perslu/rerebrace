import React from 'react'
import UIErrorOrWarning from 'UI/UIErrorOrWarning'
import Icon from "./message_icon.png"
import injectSheet from 'react-jss'


const Textarea = ({ input, label, type, value, meta, sheet: {classes}, ...props })=> {

  const fieldValidityClass=(meta.invalid) ? "fieldInvalid":'fieldValid';
  const fieldStateClass=(meta.touched) ? fieldValidityClass:'fieldInitial';

  return (
    <div className={classes.textarea}>
      <label htmlFor={type} className="">{label}</label>
      <textarea {...input} className={fieldStateClass} cols={props.cols} rows={props.rows} value={value}   />
      <UIErrorOrWarning meta={meta}/>
    </div>

  );
};


const styles = {
  textarea: {
    backgroundColor: 'yellow'
  }
}



export default injectSheet(styles)(Textarea)

