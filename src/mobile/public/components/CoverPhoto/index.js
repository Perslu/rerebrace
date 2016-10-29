import React from 'react';
import "./styles.css";


export const THEME_LIGHT = "THEME_LIGHT";

function getStyles(props) {
  return {
    backgroundImage: `url(${props.img})`,
  }
}

function getTextTheme(theme) {
  if(theme === THEME_LIGHT) {
    return "light"
  }
  else {
    return "";
  }
}

function CoverPhoto(props) {
  return (
    <div className="CoverPhoto">
      <div className="CoverPhoto--image" style={getStyles(props)}>
        <div className="CoverPhoto-dimmer"></div>
      </div>
      <h2 className={getTextTheme(props.theme)}>
        {props.text}
      </h2>
    </div>
  );
}


CoverPhoto.propTypes = {
  img: React.PropTypes.string.isRequired,
  text: React.PropTypes.string,
  theme: React.PropTypes.string,
}


export default CoverPhoto
