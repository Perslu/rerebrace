import React from 'react';
import "./styles.css";
import SectionDark from '../SectionDark';
import SectionHeader from '../SectionHeader';
import SectionContent from '../SectionContent';
import ProfileRatesForm from '../ProfileRatesForm'


const ProfileRates = () => {
  return (
    <div className="ProfileRates">
      <SectionDark pt={30}>
        <SectionHeader text="Rates"/>
        <SectionContent>
          <ProfileRatesForm/>
        </SectionContent>
      </SectionDark>
    </div>
  );
};

export default ProfileRates
