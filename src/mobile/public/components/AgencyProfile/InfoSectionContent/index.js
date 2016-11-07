/**
 * Created by Lena on 04.11.2016.
 */
import React from 'react';


const InfoSectionContent = props => (
  <div>{props.children}</div>
);

InfoSectionContent.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default InfoSectionContent

