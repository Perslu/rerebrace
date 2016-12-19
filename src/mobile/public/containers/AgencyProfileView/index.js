import React from 'react';
import AgencyProfile from '../../components/AgencyProfile';

//bardziej polaczony z Reduxem

const agency = {
  id: "4813566dgf4538419d20ec1",
  shortId: "54645",
  coverPhoto: "https://pbs.twimg.com/profile_banners/2602585338/1470626578/1500x500",
  profilePhoto: "https://pbs.twimg.com/profile_images/767972924787535872/vMRnP6uA_400x400.jpg",
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis consequat magna, non euismod dui laoreet sit amet. Aliquam vehicula turpis eu blandit hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet eleifend cursus. Nam hendrerit aliquet risus, in mattis odio rhoncus nec. Aliquam quis tincidunt metus. Mauris ultrices neque et varius venenatis. Nam ultrices metus pulvinar nunc euismod, non cursus nunc laoreet. Suspendisse scelerisque pellentesque enim vitae imperdiet. Mauris ac sollicitudin massa.',
  name: "Luxury Phuket Escorts",
  country: "Thailand",
  city: "Phuket",
  address: "Sou Lak Mueang 1",
  website: "www.luxuryphuketescorts.com",
  line: "#luxphuketescorts",
  whatsapp: "(+66) 436346546",
  viber: "(+66) 436346546",
  phone: "(+66) 436346546",
  ladies: [
    {
      id: "5833566ab667867898419d20ec1",
      shortId: "25423",
      name: "Nam",
      profilePhoto: "https://perslu.com/assets/images/lady/profilePhotos/57c8fafcf5c96c153ed16978/normal_bc9aecd9-c3c2-437a-964e-6393d07669f5.jpg",
      width: 715,
      height: 400
    },
    {
      id: "5813566ab6670684192354",
      shortId: "54633",
      name: "Bella",
      profilePhoto: "https://perslu.com/assets/images/lady/profilePhotos/5813566ab667068419d20ec1/normal_573297b2-44f4-45c0-ae6c-4415639417a3.jpg",
      width: 695,
      height: 960
    },
    {
      id: "5813566ab667068419d55675",
      shortId: "54633",
      name: "Bella",
      profilePhoto: "https://perslu.com/assets/images/lady/profilePhotos/58128a6eb667068419d20d0c/normal_1001cc6c-6a53-48c8-beac-827413a54ad0.jpg",
      width: 755,
      height: 1000
    },
    {
      id: "523423467068419d20ec1",
      shortId: "54633",
      name: "Bella",
      profilePhoto: "https://perslu.com/assets/images/lady/profilePhotos/58128a62b667068419d20d0a/normal_74e5ae72-9554-46d6-a7c4-29107e1275fa.jpg",
      width: 715,
      height: 1200
    },
    {
      id: "581356645465619d20ec1",
      shortId: "54633",
      name: "Angel",
      profilePhoto: "https://perslu.com/assets/images/lady/profilePhotos/5819cae1b5b2a53b4a0185f3/normal_f5dd3a73-9cb3-4381-96de-0d5783b98be3.jpg",
      width: 1715,
      height: 2400
    },
    {
      id: "58135667897867819d20ec1",
      shortId: "54633",
      name: "Jolie",
      profilePhoto: "https://perslu.com/assets/images/lady/profilePhotos/58127fc7b667068419d20ca8/normal_534b9b23-5ad4-4abd-9647-d6901c2f46d1.jpg",
      width: 715,
      height: 1400
    },
    {
      id: "5813563453453419d20ec1",
      shortId: "54633",
      name: "Candice",
      profilePhoto: "https://perslu.com/assets/images/lady/profilePhotos/58128b79b667068419d20d0d/normal_c7dfcbd6-3ff8-4fb2-81bb-505695ba9d11.jpg",
      width: 1015,
      height: 1200
    }
  ]
}

const AgencyProfileView = React.createClass({

  render() {
    const props = this.props;
    return <AgencyProfile profile={agency} />
  }
});

//dobrze nazywac to tak jak nazwa folderu zeby latwiej mozna znalezc
export default AgencyProfileView;
