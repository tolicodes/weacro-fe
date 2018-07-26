import PropTypes from 'prop-types';
import React from 'react';
import LoadIf from '../../UI/LoadIf';
import HeartLoader from './Heart';
import PosePicture from './PoseParts/Picture';
import PoseText from './PoseParts/Text/Text';
import { Details } from './style';

function PictureArea({
  img,
  name,
  subtitle,
  poseID,
  userID,
}) {
  return (
    <React.Fragment>
      <PosePicture img={img} poseID={poseID} userID={userID} />
      <LoadIf.notLandscape>
        <Details>
          <LoadIf.Portrait>
            <HeartLoader poseID={poseID} userID={userID} />
          </LoadIf.Portrait>
          <PoseText poseTitle={name} subtitle={subtitle} />
        </Details>
      </LoadIf.notLandscape>
    </React.Fragment>
  );
}

PictureArea.defaultProps = {
  userID: undefined,
};

PictureArea.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  poseID: PropTypes.number.isRequired,
  userID: PropTypes.number,
};

export default PictureArea;
