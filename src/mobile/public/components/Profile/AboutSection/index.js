import React from 'react';
import SectionDark from '../../SectionDark';
import SectionLight from '../../SectionLight';
import SectionHeader from '../../SectionHeader';
import SectionContent from '../../SectionContent';

const AboutSection = props => (
      <SectionDark pt={30} pb={40}>
        <SectionHeader text="About"/>
        <SectionContent>{props.children}</SectionContent>
      </SectionDark>
);
AboutSection.PropTypes = {
  children: React.PropTypes.any.isRequired,
};

export default AboutSection
