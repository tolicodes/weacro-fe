import React from 'react';
import { connect } from 'react-redux';
import PoseCard from './PoseCard';
import { checks } from './helpers';

function PosesFilter({
  lists, difficultySetting, tag, poses, currentSlide, single, poseSearch,
}) {
  console.log(difficultySetting)
  return poses
    .filter(pose => checks(single, poseSearch, pose, tag, lists, difficultySetting))
    .map((pose, cardIndex, filteredPoses) => {
      return (
      <PoseCard
        key={pose.name}
        pose={pose}
        cardIndex={cardIndex}
        filteredPoses={filteredPoses}
        difficultySetting={difficultySetting}
        currentSlide={currentSlide}
      />
    )
  }
  );
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
