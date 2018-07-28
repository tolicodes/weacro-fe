import React from 'react';
import { isClose } from '../helpers';
import PictureArea from './PictureArea';
import { Card } from './style';

export default function PoseCard({
  pose: {
    img,
    difficulty,
    id,
    name,
  },
  difficultySetting,
  filteredPoses,
  currentSlide,
  cardIndex,
}) {
  const subtitle = `${difficultySetting === 'All' ? `Difficulty: ${difficulty}` : ''}`;
  return (
    <Card key={img}>
      {isClose(2, filteredPoses, cardIndex, currentSlide) ? (
        <PictureArea img={img} poseID={id} name={name} subtitle={subtitle} />
      ) : (
        <div />
      )}
    </Card>
  );
}
