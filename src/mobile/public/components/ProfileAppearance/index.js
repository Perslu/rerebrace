import React from 'react'
import './styles.css';
import SectionDark from '../SectionDark';
import SectionHeader from '../SectionHeader';
import SectionContent from '../SectionContent';
import ProfileContent from '../ProfileContent';

const AppearanceData = {
  weight:'30',
  height: '173',
  hair: 'blond',
};

const ProfileAppearance = () => {
  return (
    <div className="ProfileAppearance">
      <SectionDark pt={30}>
        <SectionHeader text="Appearance"/>
        <SectionContent>
          <ProfileContent weight="{AppearanceData.weight}" height="{AppearanceData.height}" hair="{AppearanceData.hair}"/>
        </SectionContent>
      </SectionDark>
    </div>
  )
};

 export default ProfileAppearance
