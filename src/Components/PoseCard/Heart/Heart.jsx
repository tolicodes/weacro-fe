import PropTypes from 'prop-types';
import React from 'react';
import DisplayForm from 'Components/Nav/ProfileMenu/Popup/DisplayForm';
import { HeartArea, HeartIcon, PopupModal } from './style';


const Heart = ({
  isGuest,
  lists: { Favorites } = {},
  userID,
  removeFromUserList,
  addToUserList,
  poseID,
}) => (
  isGuest
    ? (
      <PopupModal key={`${poseID}heart`} trigger={<HeartIcon name="empty heart" />}>
        <DisplayForm />
      </PopupModal>
    )
    : (
      <HeartArea
        onClick={
        Favorites.includes(poseID)
          ? () => removeFromUserList(poseID, userID)
          : () => addToUserList(poseID, userID)
        }
      >
        <HeartIcon name={Favorites.includes(poseID) ? 'heart' : 'empty heart'} />
      </HeartArea>
    )
);

Heart.defaultProps = {
  userID: false,
};

Heart.propTypes = {
  poseID: PropTypes.number.isRequired,
  userID: PropTypes.bool,
  removeFromUserList: PropTypes.func.isRequired,
  addToUserList: PropTypes.func.isRequired,
};

export default Heart;
