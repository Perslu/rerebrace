import React from 'react';
import {Link} from 'react-router';
import Gallery from '../../components/Gallery';
import ProfileCarousel from '../../components/ProfileCarousel';
import {connect} from 'react-redux';
import {fetchProfiles} from '../../modules/profiles';
import {getProfiles} from '../../modules/profiles';
import AppContainer from '../../components/AppContainer';
import AppHeader from '../../components/AppHeader';
import CoverPhoto, {THEME_LIGHT} from '../../components/CoverPhoto';
import bangkokCoverPhoto from '../../../assets/bangkok.jpg'

const actions = {
  fetchProfiles
};
function mapStateToProps(state) {
  return {
    profiles: getProfiles(state),
    isLoading: false //getProfilesIsLoading(state),
  };
}

const loadMoreProfiles = () => console.log('Requested more profiles');

const GalleryView = React.createClass({
  componentWillMount() {
    this.props.fetchProfiles()
  },

  render() {
    const props = this.props;
    return (
    <AppContainer>
      <AppHeader>Gallery</AppHeader>
      <CoverPhoto img={bangkokCoverPhoto} theme={THEME_LIGHT} text="Bangkokasd"  />
      {/*<ProfileCarousel  items={props.profiles} />*/}
      <Gallery isLoading={props.isLoading} items={props.profiles} loadMore={loadMoreProfiles} />
    </AppContainer>
    )
  }
});


export default connect(mapStateToProps, actions)(GalleryView);
