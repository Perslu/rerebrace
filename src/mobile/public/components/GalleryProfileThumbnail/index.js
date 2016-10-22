import React from 'react';
import {Link} from 'react-router';


const GalleryProfileThumbnail = React.createClass({
  render() {
    const props = this.props;
    const imgUrl = props.profile.picture.large;
    const username = props.profile.login.username;
    return (
      <Link to={`/profile/${username}`}>
        <img src={imgUrl} className="w-100"/>
      </Link>
    )
  }
});

export default GalleryProfileThumbnail
