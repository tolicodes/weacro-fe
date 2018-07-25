import React from 'react';
import { connect } from 'react-redux';
import LoadIf from '../../UI/LoadIf';
import PosePicture from './PoseParts/Picture';
import PoseText from './PoseParts/Text';
import { Details } from './style';
import HeartLoader from './Heart';
import PropTypes from 'prop-types';

function PictureArea({
  img,
  name,
  subtitle,
  poseID,
  userID
}){
  return (
    <React.Fragment>
      <PosePicture img={img} poseID={poseID} userID={userID} />
      <LoadIf.notPortrait>
        <Details>
          <LoadIf.Portrait>
            <HeartLoader poseID={poseID} userID={userID} />
          </LoadIf.Portrait>
          <PoseText poseTitle={name} subtitle={subtitle} />
        </Details>
      </LoadIf.notPortrait>
    </React.Fragment>
  );
}

PictureArea.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  poseID: PropTypes.number.isRequired,
  userID: PropTypes.number,
};

export default PictureArea;
