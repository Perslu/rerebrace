import React from 'react';
import "./styles.css";

const SectionHeader = (props) => (
    <div className="SectionHeader">
      <div className="SectionHeader--decoration SectionHeader--left"><div></div></div>
      <div className="SectionHeader--text">{props.text}</div>
      <div className="SectionHeader--decoration SectionHeader--right"><div></div></div>
    </div>
  );

export default SectionHeader
