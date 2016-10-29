import React from 'react';
import "./styles.css";
import SpacingHOC from '../../SpacingHOC';

const AppHeaderRightControls = (props) => (
  <section className="AppHeaderRightControls" style={props.spacingStyle}>
    {props.children}
  </section>
);

AppHeaderRightControls.PropTypes = {
  children: React.PropTypes.any,
  spacingStyle: React.PropTypes.any,
};


export default SpacingHOC(AppHeaderRightControls)
