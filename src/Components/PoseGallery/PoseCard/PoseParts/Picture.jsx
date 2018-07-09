import React from 'react';
import PropTypes from 'prop-types';
import LoadDisplay from '../../../UI/Loader';
import { Img } from './style';

const PosePicture = ({ img }) => (
  <Img
    src={img}
    alt="Loading..."
    loader={LoadDisplay}
  />
);
PosePicture.propTypes = {
  img: PropTypes.string.isRequired,
};

export default PosePicture;
