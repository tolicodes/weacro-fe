import React, { Fragment } from 'react';
import LoadIf from '../../UI/LoadIf';
import PictureArea from './PictureArea';
import { isClose } from '../helpers';
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
      {!isClose(2, filteredPoses, cardIndex, currentSlide) ? (
        <div />
      ) : (
        <Fragment>
          <PictureArea img={img} poseID={id} name={name} subtitle={subtitle}/>
        </Fragment>
      )}
    </Card>
  );
}
