import React from 'react';
import {Link} from 'react-router';
import Gallery from '../../components/Gallery';
import {connect} from 'react-redux';
import {fetchProfiles} from '../../modules/profiles';
import {getProfiles} from '../../modules/profiles';
import AppContainer from '../../components/AppContainer';
import AppHeader from '../../components/AppHeader';

const actions = {
  fetchProfiles
};
function mapStateToProps(state) {
  return { profiles: getProfiles(state) };
}


const GalleryView = React.createClass({
  componentWillMount() {
    this.props.fetchProfiles()
  },

  render() {
    const props = this.props;
    return (
    <AppContainer>
      <AppHeader>Gallery</AppHeader>
      <Gallery profiles={props.profiles} />
    </AppContainer>
    )
  }
});


export default connect(mapStateToProps, actions)(GalleryView);
