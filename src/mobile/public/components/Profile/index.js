import React from 'react';
import './styles.css';
import SectionDark from '../SectionDark';
import SectionLight from '../SectionLight';
import SectionHeader from '../SectionHeader';
import CoverPhoto from '../CoverPhoto';
import singleCoverPhoto from '../../../assets/single_cover.jpg'

const renderProfile = profile => {
  const imgUrl = profile.picture.large;
  const username = profile.login.username;
  return (
    <div>
      {/*<CoverPhoto img={imgUrl} text={username}/>*/}
      <CoverPhoto img={singleCoverPhoto} text={username}/>
      <SectionDark pt={20} pb={20}>
        <SectionHeader text={username}/>
      </SectionDark>
    </div>
  )
};
const renderLoading = () => <div>Loading...</div>;
const Profile = (props) => {
  return (props.profile)? renderProfile(props.profile) : renderLoading()
};

Profile.PropTypes = {
  profile: React.PropTypes.object.isRequired,
};

export default Profile
