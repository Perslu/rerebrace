import React from 'react';
import "./styles.css";
import SpacingHOC from '../../SpacingHOC';

const AppHeaderCenterControls = (props) => (
  <section className="AppHeaderCenterControls" style={props.spacingStyle}>
    {props.children}
  </section>
);

AppHeaderCenterControls.PropTypes = {
  children: React.PropTypes.any,
  spacingStyle: React.PropTypes.any,
};

export default SpacingHOC(AppHeaderCenterControls)
