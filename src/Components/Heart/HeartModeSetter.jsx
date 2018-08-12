import PropTypes from 'prop-types';
import React from 'react';
import { addToFavorites, removeFromFavorites } from '../PoseCard/helpers';
import Heart from './UI';

const HeartModeSetter = ({
  userName,
  tag,
  lists,
  userID,
  removeFromUserList,
  addToUserList,
  poseID,
}) => {
  const guestMode = !userName && !tag;
  if (guestMode) {
    return (
      <Heart
        key={`${poseID}heart`}
        poseID={poseID}
        isFavorite={false}
        isGuest
        userID={userID}
      />
    );
  }
  return (
    <Heart
      key={`${poseID}heart`}
      poseID={poseID}
      isFavorite={
          lists && lists.Favorites && lists.Favorites.indexOf(poseID) !== -1
        }
      remove={() => removeFromFavorites(poseID, userID, removeFromUserList)}
      add={() => addToFavorites(poseID, userID, addToUserList)}
      userID={userID}
    />
  );
};

HeartModeSetter.defaultProps = {
  userName: false,
  tag: false,
  userID: false,
};

HeartModeSetter.propTypes = {
  userName: PropTypes.string,
  tag: PropTypes.string,
  poseID: PropTypes.number.isRequired,
  userID: PropTypes.number,
  lists: PropTypes.any.isRequired,
  removeFromUserList: PropTypes.func.isRequired,
  addToUserList: PropTypes.func.isRequired,
};

export default HeartModeSetter;
