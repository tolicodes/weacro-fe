import React from 'react';
import CardLoader from './CardLoader';

export default ({ poses }) => poses.map((pose, cardIndex, filteredPoses) => (
  <CardLoader
    key={pose.name + pose.id}
    pose={pose}
    cardIndex={cardIndex}
    filteredPoses={filteredPoses}
  />
));
