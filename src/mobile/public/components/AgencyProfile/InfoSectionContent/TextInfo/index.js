import React from 'react';


const TextInfo = props => (
  <div>{props.profile.whatsapp}</div>
);


TextInfo.propTypes = {
  profile: React.PropTypes.any.isRequired,
};

export default TextInfo
