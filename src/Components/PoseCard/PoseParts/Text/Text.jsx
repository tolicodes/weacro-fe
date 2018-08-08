import React from 'react';
import PropTypes from 'prop-types';
import {
  Details, TextArea, Title, Subtitle,
} from './style';

function PoseText({ poseTitle, subtitle }) {
  return (
    <Details>
      <TextArea>
        <Title>
          {poseTitle}
        </Title>
        <Subtitle>
          {subtitle}
        </Subtitle>
      </TextArea>
    </Details>
  );
}

PoseText.propTypes = {
  poseTitle: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default PoseText;
