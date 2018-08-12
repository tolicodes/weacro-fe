import React from 'react';
import PropTypes from 'prop-types';
import {
  Details, TextArea, Title, Subtitle,
} from './style';

function PoseText({ title, subtitle }) {
  return (
    <Details>
      <TextArea>
        <Title>
          {title}
        </Title>
        <Subtitle>
          {subtitle}
        </Subtitle>
      </TextArea>
    </Details>
  );
}

PoseText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default PoseText;
