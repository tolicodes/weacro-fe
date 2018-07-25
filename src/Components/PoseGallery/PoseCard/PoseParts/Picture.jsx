import React from 'react';
import PropTypes from 'prop-types';
import LoadDisplay from '../../../UI/Loader';
import { Img } from './style';
import HeartArea from '../Heart';
import LoadIf from '../../../UI/LoadIf';

function PosePicture({ img, poseID, userID }){
  return (
    <div style={{position:'relative'}} >
      <Img
        src={img}
        alt="Loading..."
        loader={LoadDisplay}
      />
    <LoadIf.Desktop>
      <HeartArea poseID={poseID} userID={userID} />
    </LoadIf.Desktop>
    </div>
  );
}

PosePicture.propTypes = {
  img: PropTypes.string.isRequired,
};

export default PosePicture;
