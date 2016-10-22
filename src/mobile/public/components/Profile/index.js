import React from 'react';

const Profile = React.createClass({
  renderProfile() {
    const props = this.props;
    const imgUrl = props.profile.picture.large;
    const username = props.profile.login.username;
    return (
      <div>
        <img src={imgUrl} className="w-100"/>
        <div>{username}</div>
      </div>
    )
  },

  renderLoading() {
    return (
      <div>

        Loading...
      </div>
    )
  },

  render() {
    if(this.props.profile) return this.renderProfile()
    else return this.renderLoading()
  }
});

export default Profile
