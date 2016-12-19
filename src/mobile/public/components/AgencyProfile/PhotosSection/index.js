import React from 'react';
import SectionDark from '../../SectionDark';
import SectionLight from '../../SectionLight';
import SectionHeader from '../../SectionHeader';
import SectionContent from '../../SectionContent';
import MasonryLayout from 'react-masonry-layout';

const profileToProfileListItem = photo => {
  return <div key={photo.email}
              style={{
                width     : '160px',
                height    : `${photo.imgHeight}px`,
                display   : 'block',
                background: 'rgba(0,0,0,0.7)',
                overflow  : 'hidden'
              }}
  ><Profile profile={profile}/></div>
};

const PhotosSection = props => (
      <SectionLight pt={30} pb={40}>
        <SectionHeader text="Photos"/>
        <SectionContent>
          <MasonryLayout
            id="items"
            className="GalleryGrid"
            infiniteScroll={props.loadMore}
            infiniteScrollLoading={props.isLoading}
          >
            {R.compose(R.map(profileToProfileListItem))(props.photos)}
          </MasonryLayout>
        </SectionContent>
      </SectionLight>
);
PhotosSection.propTypes = {
  photos: React.PropTypes.array.isRequired,
};

export default PhotosSection
