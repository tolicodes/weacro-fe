import React from 'react';
import PropTypes from 'prop-types';
import DisplayForm from 'Components/Nav/ProfileMenu/Popup/DisplayForm';
import { HeartArea, HeartIcon, PopupModal } from './style';

const Heart = ({
  isFavorite, poseID, userID, remove, add,
}) => {
  if (!userID) {
    return (
      <PopupModal trigger={<HeartIcon name="empty heart" />}>
        <DisplayForm />
      </PopupModal>
    );
  }
  const action = isFavorite ? () => remove(poseID, userID) : () => add(poseID, userID);
  return (
    <HeartArea onClick={action}>
      <HeartIcon name={isFavorite ? 'heart' : 'empty heart'} />
    </HeartArea>
  );
};

Heart.defaultProps = {
  remove: undefined,
  userID: false,
  add: undefined,

};

Heart.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  poseID: PropTypes.number.isRequired,
  userID: PropTypes.string,
  remove: PropTypes.func,
  add: PropTypes.func,
};

export default Heart;
