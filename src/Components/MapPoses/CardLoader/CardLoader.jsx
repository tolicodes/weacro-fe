import React from 'react';
import PictureArea from '../../PoseCard';
import { Card } from '../../PoseCard/style';

const isClose = (preload, filteredPoses, cardIndex, currentSlide) => {
  const distance = Math.abs(cardIndex - currentSlide);
  return distance < preload || distance > filteredPoses.length - preload;
};

const PoseIsClose = ({
  filteredPoses,
  cardIndex,
  currentSlide,
  children,
}) => React.cloneElement(children,
  { isClose: isClose(4, filteredPoses, cardIndex, currentSlide) });

export default ({
  pose: {
    img, difficulty, id, name,
  },
  difficultySetting,
  ...rest
}) => (
  <Card key={img}>
    <PoseIsClose {...rest}>
      <PictureArea
        img={img}
        poseID={id}
        name={name}
        subtitle={difficultySetting === 'All' ? `Difficulty: ${difficulty}` : ''}
      />
    </PoseIsClose>
  </Card>
);
