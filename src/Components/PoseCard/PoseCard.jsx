import React from 'react';
import { connect } from 'react-redux';
import { isClose } from './helpers';
import PictureArea from './PictureArea';
import { Card } from './style';

const PoseCard = ({
  pose: {
    img, difficulty, id, name,
  },
  difficultySetting,
  filteredPoses,
  currentSlide,
  cardIndex,
}) => {
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
};

const mapStateToProps = (
  { view: { difficulty, currentSlide } },
) => (
  { difficultySetting: difficulty, currentSlide }
);

export default connect(mapStateToProps)(PoseCard);
