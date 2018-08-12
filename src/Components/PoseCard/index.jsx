import PropTypes from 'prop-types';
import React from 'react';
import LoadIf from 'Components/UI/LoadIf';
import Heart from '../Heart';
import Picture from './PoseParts/Picture';
import PoseText from './PoseParts/Text/Text';
import { Details, Card } from './style';

const PoseCard = ({
  img, poseID, title, subtitle,
}) => (
  <Card>
    <Picture img={img} />
    <LoadIf.notLandscape>
      <Details>
        <LoadIf.Portrait>
          <Heart poseID={poseID} />
        </LoadIf.Portrait>
        <PoseText title={title} subtitle={subtitle} />
      </Details>
    </LoadIf.notLandscape>
  </Card>
);

PoseCard.defaultProps = {
  userID: undefined,
};

PoseCard.propTypes = {
  subtitle: PropTypes.string.isRequired,
  userID: PropTypes.number,
};

export default PoseCard;
