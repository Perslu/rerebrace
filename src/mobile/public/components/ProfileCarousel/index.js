import React from 'react';
import NukaCarousel from 'nuka-carousel'
import R from 'ramda';
import './styles.css';

const profileToProfileListItem = profile => {
  return <img key={profile.email} src={profile.picture.large}/>
};

const log = text => what => {
  console.log(text, what);
  return what;
};
const objectToList = obj => {
  const getObjectContent = (key) =>  obj[key];
  return R.map(getObjectContent, R.keys(obj));
};
const ProfileCarousel = (props) => {
    return (
      <div className="ProfileCarousel">
      <NukaCarousel cellSpacing={20} slidesToShow={4} decorators={[]} framePadding="20px" >
        {R.compose(log('profiles for carousel'), R.map(profileToProfileListItem), R.take(10), objectToList)(props.items)}
      </NukaCarousel>
      </div>
    )
}

export default ProfileCarousel
