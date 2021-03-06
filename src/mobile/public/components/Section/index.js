import React from 'react';
import "./styles.css";
import R from 'ramda';
import SpacingHOC from '../SpacingHOC';


const Section = (props) => (
    <div style={props.spacingStyle} className={R.join(' ', ["Section", props.className])}>{props.children}</div>
);

Section.propTypes = {
  className: React.PropTypes.string,
};
export default SpacingHOC(Section)
