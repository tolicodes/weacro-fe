import React from 'react';
import styled from 'styled-components';
import LoadDisplay from '../../../UI/Loader';
import {
  Desktop,
  PhonePortrait,
  PhoneLandscape,
} from '../../../UI/DeviceRules';

const PosePicture = ({ img }) => (
  <picture>
    <source
      srcSet={img.replace('https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/', 'https://s3.us-east-2.amazonaws.com/yardenimages/WeAcro/')}
      media={Desktop}
    />
    <Img
      src={img.replace('https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/', 'https://s3.us-east-2.amazonaws.com/yardenimages/WeAcro/')}
      alt="Loading..."
      loader={LoadDisplay}
    />
  </picture>
);

export default PosePicture;

const Img = styled.img`
	@media ${PhonePortrait}{
		max-height: 60vh;
		width: auto;
		max-width: 100vw;
		border-radius: 5px;
		min-width: auto;
	}
	@media ${PhoneLandscape}{
		height: 101vh;
		width: auto;
		max-width: 100vw;
		border-radius: 5px;
	}
	@media ${Desktop}{
		height: 50vw;
		max-height: 70vh;
		width: auto;
		border-radius: 5px;
	}
`;
