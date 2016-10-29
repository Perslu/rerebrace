import React from 'react';
import MasonryLayout from 'react-masonry-layout'
import Profile from '../GalleryProfileThumbnail';
import R from 'ramda';
import './styles.css';

const profileToProfileListItem = profile => {
  return <div key={profile.email}
              style={{
                width     : '160px',
                height    : `${profile.imgHeight}px`,
                display   : 'block',
                background: 'rgba(0,0,0,0.7)',
                overflow  : 'hidden'
              }}
  ><Profile profile={profile}/></div>
};

const objectToList = obj => {
  const getObjectContent = (key) => obj[key];
  return R.map(getObjectContent, R.keys(obj));
};
const Gallery = (props) => {
  return (
    <div className="Gallery">
      <MasonryLayout
        id="items"
        className="GalleryGrid"
        infiniteScroll={props.loadMore}
        infiniteScrollLoading={props.isLoading}
      >
        {R.compose(R.map(profileToProfileListItem), objectToList)(props.items)}
      </MasonryLayout>
    </div>
  )
}

export default Gallery
