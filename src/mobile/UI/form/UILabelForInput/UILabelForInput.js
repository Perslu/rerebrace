import React from 'react'
import injectSheet from 'react-jss'

const UILabelForInput =({  label, name,  sheet: {classes}, ...props })=> {
 return <label htmlFor={name} className={classes.label}> {label} </label>
}

const styles = {
  label: {
    float: 'left',
    color: 'grey',
    width: '101px',
    textAlign: 'left'
  }
}

export default  injectSheet(styles) (UILabelForInput)
