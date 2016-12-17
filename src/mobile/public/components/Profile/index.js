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


const renderProfile = props => {
  const imgUrl = props.profile.picture.large;
  const username = props.profile.login.username;
  return (
    <AppContainer>
      <AppHeader hasBack onBack={props.onBack}/>
      <CoverPhoto img={singleCoverPhoto} text={username}/> {/*<CoverPhoto img={imgUrl} text={username}/>*/}
      <AboutSection>Lorem ipsum dolor sit amet, tellus ac mauris tortor, luctus vel lorem ut purus enim vivamus, nunc morbi cras integer id sed mauris, tempor tortor rutrum sed, ultrices amet nonummy etiam. Mattis ac aenean nostra. Eu ac sed, diam cras dui elit aliquam tristique facilisi. Feugiat augue. Quis quis eros quis augue, ipsum tristique luctus faucibus donec imperdiet, justo velit vestibulum ultricies scelerisque pellentesque, tellus ut vehicula arcu mauris sapien. Habitant ut, venenatis nulla, rutrum ante luctus.</AboutSection>
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
