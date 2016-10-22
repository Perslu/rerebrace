import React from 'react';
import {SpringGrid} from 'react-stonecutter';
import Profile from '../GalleryProfileThumbnail';
import R from 'ramda';
import './styles.css';

const profileToProfileListItem = profile => {
  console.log("profile", profile);
  return <li className="w-40" key={profile.email}><Profile profile={profile}/></li>
};

const objectToList = obj => {
  const getObjectContent = (key) =>  obj[key];
  return R.map(getObjectContent, R.keys(obj));
};
const Gallery = React.createClass({
  render() {
    const props = this.props;
    return (
      <div className="Gallery">
      <SpringGrid
        className="list GalleryGrid"
        component="ul"
        columns={2}
        columnWidth={160}
        gutterWidth={5}
        gutterHeight={5}
        itemHeight={160}
        springConfig={{stiffness: 170, damping: 26}}
      >
        {R.compose(R.map(profileToProfileListItem), objectToList)(props.profiles)}
      </SpringGrid>
      </div>
    )
  }
});

export default Gallery
