import React from 'react';
import SectionDark from '../SectionDark';
import SectionHeader from '../SectionHeader';
import SectionContent from '../SectionContent';
import ProfileContent from '../ProfileContent';

const ProfileInfo = () => {
  return (
    <div className="PersonInfo">
      <SectionDark pt={30}>
        <SectionHeader text="Profile"/>
        <SectionContent>
          <ProfileContent/>
        </SectionContent>
      </SectionDark>
    </div>
  )
};


export default ProfileInfo
