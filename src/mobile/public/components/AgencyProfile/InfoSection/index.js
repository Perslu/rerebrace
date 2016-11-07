/**
 * Created by Lena on 04.11.2016.
 */
import React from 'react';
import SectionLight from '../../SectionLight';
import SectionHeader from '../../SectionHeader';
import SectionContent from '../../SectionContent';

const InfoSection = props => (
  <SectionLight pt={30} pb={40}>
    <SectionHeader text="Info"/>
    <SectionContent>{props.children}</SectionContent>
  </SectionLight>
);
InfoSection.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default InfoSection
