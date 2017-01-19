import React from 'react'
import { injectSheet, darkBgColor, darkFontColor, lightBgColor, lightFontColor, lighten } from 'UI/styles'

const SectionHeader = ({sheet: {classes}, primary, primaryTextColor, ...props}) => {
  const selectStyles = (primary) ? classes.primary : classes.default
  const sectionHeaderTextColor = (primaryTextColor)? classes.sectionHeaderColorText : classes.defaultSectionHeaderColorText
  return(
    <div className={classes.sectionHeader +' '+ selectStyles}>
      <div className={classes.sectionHeaderDecoration +' ' + classes.SectionHeaderLeft}><div className={classes.sectionHeaderLeftDiv +' '+ classes.sectionHeaderDecorationDiv}></div></div>
      <div className={classes.sectionHeaderText +' '+ sectionHeaderTextColor} >{props.text}</div>
      <div className={classes.sectionHeaderDecoration +' '+ classes.sectionHeaderRight}><div className={classes.sectionHeaderRightDiv +' '+ classes.sectionHeaderDecorationDiv}></div></div>
    </div>
  );
}

const styles = {
  sectionHeader        : {
    backgroundColor: 'hsla(195, 21%, 89%, 1)',
    padding: '20px 0',
  },
  primary              : {
    backgroundColor: lightBgColor.string(),
  },
  default              : {
    backgroundColor: darkBgColor.string(),
  },
  sectionHeaderLeft    : {
    paddingLeft: '5%',
  },
  sectionHeaderRight   : {
    paddingRight: '5%',
  },
  sectionHeaderLeftDiv : {
    background: 'linear-gradient(to left, rgba(28, 28, 28, 0.9), rgba(28, 28, 28, 0.0))',
  },
  sectionHeaderRightDiv: {
    background: 'linear-gradient(to right, rgba(28, 28, 28, 0.9), rgba(28, 28, 28, 0.0))',
  },
  sectionHeaderDecoration   : {
    display      : 'inline-block',
    width        : '30%',
    verticalAlign: 'super',
  },
  sectionHeaderDecorationDiv: {
    height: '1px',
  },
  defaultSectionHeaderColorText: {
    color: darkFontColor.string(),
  },
  sectionHeaderColorText: {
    color: lightFontColor.string(),
  },
  sectionHeaderText: {
    fontSize     : '1rem',
    fontFamily   : "'Droid Serif',Georgia,serif",
    fontStyle    : 'italic',
    textTransform: 'uppercase',
    textAlign    : 'center',
    letterSpacing: '1px',
    display      : 'inline-block',
    width        : '39.9%',
    padding      : '0',
    margin       : '0',
    border       : 'none',
  },
}

export default injectSheet(styles)(SectionHeader)
