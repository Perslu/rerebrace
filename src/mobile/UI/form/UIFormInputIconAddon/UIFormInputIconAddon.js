import React from 'react'
import injectSheet from 'UI/styles/jss'



const UIFormInputIconAddon = ({sheet: {classes}, icon, left, right, onClick, validatedClassname,...props}) => {
  const Icon = icon
  return <div className={validatedClassname +' '+ ((left)?classes.iconContainerLeft:'')+' '+ ((right)?classes.iconContainerRight:'')} onClick={onClick}><Icon/></div>
}
const border = {
  borderWidth: '1px',
  borderStyle: 'solid',
}
const styles = {
  iconContainerLeft: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRight: 'none',
    color: 'black',
    padding: '5px 10px',
  },
  iconContainerRight: {
    extend: border,

    //border: '1px solid black',
    //borderLeft: 'none',
    color: 'black',
    padding: '5px 10px',
    borderLeft: 'none',
  },
}

export default  injectSheet(styles)(UIFormInputIconAddon)



