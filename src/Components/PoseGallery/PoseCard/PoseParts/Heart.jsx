import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { HeartArea, HeartState } from './style';

const Heart = ({
  isFavorite, poseID, userID, remove, add,
}) => {
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
  isFavorite: PropTypes.string.isRequired,
  poseID: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
};

export default Heart;
