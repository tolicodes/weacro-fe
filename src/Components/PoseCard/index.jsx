import React from 'react';
import { connect } from 'react-redux';
import PoseCard from './PoseCard';

const filterPoses = (poses, address, searchTerm, tag, lists, difficultySetting) => {
  const addressSearchTerm = address.includes('/pose')
    ? address.split('/')[2]
    : false;
  const simplify = word => word.toLowerCase().replace('-', ' ');
  const isFavorite = poseId => lists && lists.Favorites && lists.Favorites.indexOf(poseId) !== -1;

  return poses.filter((pose) => {
    if (addressSearchTerm) return simplify(pose.name).includes(simplify(addressSearchTerm));
    if (tag && !isFavorite(pose.id, lists)) return false;
    if (searchTerm) return simplify(pose.name).includes(simplify(searchTerm));
    if (difficultySetting === 'All' || difficultySetting === pose.difficulty) return true;
    return false;
  });
};


const MapPoseCards = ({ difficultySetting, poses, currentSlide }) => poses
  .map((pose, cardIndex, filteredPoses) => (
    <PoseCard
      key={pose.name + pose.id}
      pose={pose}
      cardIndex={cardIndex}
      filteredPoses={filteredPoses}
    />
  ));


const mapStateToProps = (
  {
    pose: { poses },
    view: {
      tag, difficulty, currentSlide, name: searchTerm,
    },
    router: { location: { pathname } },
    user: { lists },
  },
) => (
  {
    poses: filterPoses(poses, pathname, searchTerm, tag, lists, difficulty),
    difficultySetting: difficulty,
    currentSlide,
  }
);


export default connect(mapStateToProps)(MapPoseCards);
