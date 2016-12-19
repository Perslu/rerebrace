/**
 * Created by Lena on 04.11.2016.
 */
//dostaje propsy i heja

import React from 'react';
import './styles.css';
import CoverPhoto from '../CoverPhoto';
import singleCoverPhoto from '../../../assets/single_cover.jpg'
import AppHeader from '../AppHeader';
import AppContainer from '../AppContainer';
import AboutSection from './AboutSection';
import InfoSection from './InfoSection'



const renderProfile = props => {
  return (
    <AppContainer>
      <AppHeader hasBack onBack={props.onBack}/>
      <CoverPhoto img={singleCoverPhoto} text={props.profile.name}/> {/*<CoverPhoto img={imgUrl} text={username}/>*/}
      <AboutSection>{props.profile.description}</AboutSection>
      <InfoSection profile={props.profile} />
    </AppContainer>
  )
};
const renderLoading = () => <div>Loading...</div>;

const AgencyProfile = (props) => {
  return (props.profile) ? renderProfile(props) : renderLoading()
};

AgencyProfile.propTypes = {
  onBack : React.PropTypes.func,
  profile: React.PropTypes.object.isRequired,
};

export default AgencyProfile
