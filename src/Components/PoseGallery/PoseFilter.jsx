import React from 'react';
import { connect } from 'react-redux';
import PoseCard from './PoseCard/PoseCard';
import { checks } from './helpers';

function PosesFilter({
  lists, difficultySetting, tag, poses, currentSlide, poseSearch, addressSearchTerm,
}) {
  return poses
    .filter(pose => checks(addressSearchTerm, poseSearch, pose, tag, lists, difficultySetting))
    .map((pose, cardIndex, filteredPoses) => (
      <PoseCard
        key={pose.name}
        pose={pose}
        cardIndex={cardIndex}
        filteredPoses={filteredPoses}
        difficultySetting={difficultySetting}
        currentSlide={currentSlide}
      />
    ));
}

const mapStateToProps = ({
  pose: { poses },
  view: {
    tag, difficulty, currentSlide, name,
  },
  user: { lists },
}) => ({
  poses, tag, lists, poseSearch: name, difficultySetting: difficulty, currentSlide,
});

export default connect(mapStateToProps)(PosesFilter);
