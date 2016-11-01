import React from 'react';
import "./styles.css";
import SpacingHOC from '../../SpacingHOC';

const AppHeaderLeftControls = (props) => (
  <section className="AppHeaderLeftControls" style={props.spacingStyle}>
    {props.children}
  </section>
);

AppHeaderLeftControls.propTypes = {
  children: React.PropTypes.any,
  spacingStyle: React.PropTypes.any,
};

export default SpacingHOC(AppHeaderLeftControls)
