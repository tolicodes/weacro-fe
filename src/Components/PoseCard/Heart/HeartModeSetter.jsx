import PropTypes from 'prop-types';
import React from 'react';
import Heart from './UI';

const HeartModeSetter = ({
  guestMode,
  lists: { Favorites } = {},
  userID,
  removeFromUserList,
  addToUserList,
  poseID,
}) => (
  guestMode
    ? (
      <Heart
        key={`${poseID}heart`}
        poseID={poseID}
        isFavorite={false}
        isGuest
      />
    )
    : (
      <Heart
        key={`${poseID}heart`}
        poseID={poseID}
        kind={Favorites.includes(poseID) ? 'heart' : 'empty heart'}
        isGuest={false}
        action={
          Favorites.includes(poseID)
            ? () => removeFromUserList(poseID, userID)
            : () => addToUserList(poseID, userID)}
      />
    ));

HeartModeSetter.defaultProps = {
  guestMode: true,
  userID: false,
};

HeartModeSetter.propTypes = {
  poseID: PropTypes.number.isRequired,
  userID: PropTypes.bool,
  guestMode: PropTypes.bool,
  removeFromUserList: PropTypes.func.isRequired,
  addToUserList: PropTypes.func.isRequired,
};

export default HeartModeSetter;
