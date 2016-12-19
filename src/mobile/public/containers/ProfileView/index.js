import React from 'react';
import { Link } from 'react-router';
import Profile from '../../components/Profile';
import { connect } from 'react-redux';
import { fetchProfile } from '../../modules/profiles';
import { getProfile } from '../../modules/profiles';

const actions = {
  fetchProfile
};
function mapStateToProps(state, ownProps) {
  return { profile: getProfile(state, ownProps.params.profileId) };
}


const ProfileView = React.createClass({
  componentWillMount() {
    this.props.fetchProfile(this.props.params.profileId)
  },
  
  render() {
    const { profile } = this.props;
    return (profile) ? <Profile profile={profile}/> : <span>Loading</span>
  }
});


export default connect(mapStateToProps, actions)(ProfileView);
