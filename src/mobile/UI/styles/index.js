import injectSheet from 'UI/styles/jss'
export {injectSheet}
export {darkBgColor, darkFontColor, lightBgColor, lightFontColor, primaryColor} from './colors/constants'
export {darken, transparentize, lighten} from './colors/utils'
export const inputStyle =
  {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    width           : '1%',
    height          : '35px',
    padding         : '6px 16px',
    color           : '#909fa7',
    background : 'url(../../assets/logo.png)',
    borderWidth: '1px',
    borderStyle: 'solid',
    outline: 'none',
  }

  export const  inputGroup= {
      display: 'flex',
      width: '100%',
      position: 'relative'
    }

export const formSection =
  {
    textAlign: 'center',
    paddingBottom: '20px',
  }
export const greenText =
  {
    color: 'green'
  }
export const classesForValidatedClass =
  {
    fieldInvalid: {
      borderColor: 'red'
    },
    fieldValid  : {
      borderColor: 'blue'
    },
    fieldInitial: {
      borderColor: 'black',
      webkitTransition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
      transition      : 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
    }
  }


