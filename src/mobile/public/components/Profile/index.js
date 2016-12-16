import React from 'react';
import './styles.css';
import CoverPhoto from '../CoverPhoto';
import singleCoverPhoto from '../../../assets/single_cover.jpg'
import AppHeader from '../AppHeader';
import AppContainer from '../AppContainer';

import AboutSection from './AboutSection';
import ProfileInfo from '../ProfileInfo';
import ProfileAppearance from '../ProfileAppearance';
import ProfileRates from '../ProfileRates';
import BookNowButton from '../BookNowButton';
import faker from 'faker';


const renderProfile = props => {
  const imgUrl = props.profile.picture.large;
  const username = props.profile.login.username;
  return (
    <AppContainer>
      <AppHeader hasBack onBack={props.onBack}/>
      <CoverPhoto img={singleCoverPhoto} text={username}/> {/*<CoverPhoto img={imgUrl} text={username}/>*/}
      <AboutSection>{faker.fake("{{lorem.paragraph}}")}</AboutSection>
      <ProfileInfo/>
      <ProfileAppearance/>
      {/*<ProfileRates/>*/}
      <BookNowButton/>
    </AppContainer>
  )
};
const renderLoading = () => <div>Loading...</div>;

const Profile = (props) => {
  return (props.profile) ? renderProfile(props) : renderLoading()
};

Profile.propTypes = {
  onBack : React.PropTypes.func,
  profile: React.PropTypes.object.isRequired,
};

export default Profile
