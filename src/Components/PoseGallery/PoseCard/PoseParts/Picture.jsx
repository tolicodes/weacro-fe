import React from 'react';
import PropTypes from 'prop-types';
import LoadDisplay from '../../../UI/Loader';
import { Img } from './style';

function PosePicture({ img }){
  return (
    <Img
      src={img}
      alt="Loading..."
      loader={LoadDisplay}
    />
  );
}

PosePicture.propTypes = {
  img: PropTypes.string.isRequired,
};

export default PosePicture;
