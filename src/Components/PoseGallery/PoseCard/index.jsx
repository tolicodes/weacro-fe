import React, { Fragment } from 'react';
import LoadIf from '../../UI/LoadIf';
import PoseText from './PoseParts/Text';
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
  return (
    <Card key={img}>
      {!isClose(2, filteredPoses, cardIndex, currentSlide) ? (
        <div />
      ) : (
        <Fragment>
          <PictureArea img={img} poseID={id} />
          <LoadIf.notPortrait>
            <PoseText
              poseTitle={name}
              subtitle={`${
                difficultySetting === 'All' ? `Difficulty: ${difficulty}` : ''
              }`}
            />
          </LoadIf.notPortrait>
        </Fragment>
      )}
    </Card>
  );
}
