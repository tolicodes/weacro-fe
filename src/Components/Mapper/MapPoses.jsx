import React from 'react';
import CardLoader from './CardLoader';

const Mapper = ({ poses }) => poses.map((pose, cardIndex, filteredPoses) => (
  <CardLoader
    key={pose.name + pose.id}
    pose={pose}
    cardIndex={cardIndex}
    filteredPoses={filteredPoses}
  />
));

export default Mapper;
