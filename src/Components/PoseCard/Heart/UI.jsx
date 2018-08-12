import React from 'react';
import PropTypes from 'prop-types';
import DisplayForm from 'Components/Nav/ProfileMenu/Popup/DisplayForm';
import { HeartArea, HeartIcon, PopupModal } from './style';

const Heart = ({
  isGuest, action, kind,
}) => {
  if (isGuest) {
    return (
      <PopupModal trigger={<HeartIcon name="empty heart" />}>
        <DisplayForm />
      </PopupModal>
    );
  }
  return (
    <HeartArea onClick={action}>
      <HeartIcon name={kind} />
    </HeartArea>
  );
};

Heart.defaultProps = {
  isUser: false,
  action: null,
  kind: 'empty heart',

};

Heart.propTypes = {
  isGuest: PropTypes.bool,
  action: PropTypes.func,
  kind: PropTypes.string,
};

export default Heart;
