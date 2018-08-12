import React from 'react';
import PoseCard from '../../PoseCard';

const isClose = (preload, filteredPoses, cardIndex, currentSlide) => {
  const distance = Math.abs(cardIndex - currentSlide);
  return distance < preload || distance > filteredPoses.length - preload;
};

export default ({
  pose: {
    img, id: poseID, name: title, difficulty,
  },
  filteredPoses,
  cardIndex,
  difficultySetting,
  currentSlide,
  user,
}) => (
  <React.Fragment key={img}>
    {isClose(4, filteredPoses, cardIndex, currentSlide) ? (
      <PoseCard
        subtitle={difficultySetting === 'All' ? `Difficulty: ${difficulty}` : ''}
        img={img}
        poseID={poseID}
        title={title}
        user={user}
      />
    ) : (
      <div />
    )}
  </React.Fragment>
);

/*

    img, difficulty, id, name,
  const subtitle = `;

*/
