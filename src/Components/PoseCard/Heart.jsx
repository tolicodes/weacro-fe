import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addToUser, removeFromUser } from 'store/actions/actions';
import { addToFavorites, removeFromFavorites } from './helpers';
import Heart from './PoseParts/Heart';

function HeartArea({
  userName, tag, poseID, userID, lists, removeFromUserList, addToUserList,
}) {
  if (!userName && !tag) {
    return (
      <Heart
        key={`${poseID}heart`}
        poseID={poseID}
        isFavorite={false}
        isGuest
        userID={userID}
      />
    );
  } return (
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
}

HeartArea.defaultProps = {
  userName: false,
  tag: false,
  userID: false,
};

HeartArea.propTypes = {
  userName: PropTypes.string,
  tag: PropTypes.string,
  poseID: PropTypes.number.isRequired,
  userID: PropTypes.number,
  lists: PropTypes.any.isRequired,
  removeFromUserList: PropTypes.func.isRequired,
  addToUserList: PropTypes.func.isRequired,
};

const mapStateToProps = ({ view: { tag }, user: { name, lists, id } }) => ({
  userName: name,
  tag,
  lists,
  userID: id,
});

const mapDispatchToProps = dispatch => ({
  addToUserList: (poseId, listName) => dispatch(addToUser(poseId, listName)),
  removeFromUserList: (poseId, listName) => dispatch(removeFromUser(poseId, listName)),
});


export default connect(mapStateToProps, mapDispatchToProps)(HeartArea);
