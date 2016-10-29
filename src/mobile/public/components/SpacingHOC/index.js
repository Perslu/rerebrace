import React from 'react';
import "./styles.css";


const getStyles = (props) => {
  return {
    marginTop: `${props.mt}px`,
    marginBottom: `${props.mb}px`,
    marginLeft: `${props.ml}px`,
    marginRight: `${props.mr}px`,
    paddingTop: `${props.pt}px`,
    paddingBottom: `${props.pb}px`,
    paddingLeft: `${props.pl}px`,
    paddingRight: `${props.pr}px`,
  }
};


const SpacingHOC = (Comp) => (props) => <Comp {...props} spacingStyle={getStyles(props)} />;
//
//SpacingHOC.PropTypes = {
//  mb: React.PropTypes.number,
//  ml: React.PropTypes.number,
//  mr: React.PropTypes.number,
//  mt: React.PropTypes.number,
//  pb: React.PropTypes.number,
//  pl: React.PropTypes.number,
//  pr: React.PropTypes.number,
//  pt: React.PropTypes.number,
//};
export default SpacingHOC


