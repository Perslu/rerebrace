import React from 'react';
import {Link} from 'react-router';
import './styles.css';


const GalleryProfileThumbnail = (props) => {
  const imgUrl = props.profile.picture.large;
  const username = props.profile.login.username;
  return (
    <Link to={`/profile/${username}`}>
      <img src={imgUrl} className="GalleryProfileThumbnail"/>
    </Link>
  )

}

export default GalleryProfileThumbnail
