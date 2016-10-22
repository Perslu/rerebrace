import React from 'react';
import "./styles.css";


function getStyles(props) {
  return {
    backgroundImage: `url(${props.img})`,
  }
}

function CoverPhoto(props) {
  return (
    <div className="CoverPhoto">
      <div className="CoverPhoto--image" style={getStyles(props)}>
        <div className="CoverPhoto-dimmer"></div>
      </div>
      <h2>
        {props.text}
      </h2>
    </div>
  );
}

export default CoverPhoto
