import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { HeartArea, HeartState } from './style';
import { Modal } from 'semantic-ui-react';
import LoginForm from '../../../Nav/Popup/Login';

const Heart = ({
  isFavorite, poseID, userID, remove, add, isGuest
}) => {
  if (isGuest) {
    return (
    <Modal trigger={<HeartArea><HeartState><Icon name={'empty heart'} color="red" /></HeartState></HeartArea>}>
     <LoginForm />
    </Modal>)
  }
  const action = isFavorite ? () => remove(poseID, userID) : () => add(poseID, userID);
  return (
    <HeartArea
      onClick={action}
    >
      <HeartState>
        <Icon name={isFavorite ? 'heart' : 'empty heart'} color="red" />
      </HeartState>
    </HeartArea>
  );
};

Heart.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  poseID: PropTypes.number.isRequired,
  userID: PropTypes.string,
  remove: PropTypes.func,
  add: PropTypes.func,
};

export default Heart;
