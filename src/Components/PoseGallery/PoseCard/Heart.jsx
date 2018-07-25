import React from 'react'
import Heart from './PoseParts/Heart';
import { connect } from 'react-redux';
import { removeFromFavorites, addToFavorites } from '../helpers';
import { removeFromUser, addToUser } from '../../../store/actions/actions';

function HeartArea({userName, tag, poseID, userID, lists, removeFromUserList, addToUserList}) {
  if (!userName && !tag) {
    return <Heart
        key={`${poseID}heart`}
        poseID={poseID}
        isFavorite={false}
        isGuest={true}
        userID={userID}
      />;
  } else return 
      <Heart
        key={`${poseID}heart`}
        poseID={poseID}
        isFavorite={
          lists && lists.Favorites && lists.Favorites.indexOf(poseID) !== -1
        }
        remove={() => removeFromFavorites(poseID, userID, removeFromUserList)}
        add={() => addToFavorites(poseID, userID, addToUserList)}
        userID={userID}
      />;
}

const mapStateToProps = ({ view: { tag }, user: { name, lists, id } }) => ({
  userName: name,
  tag,
  lists,
  userID: id,
});

const mapDispatchToProps = dispatch => ({
  addToUserList: (pose_id, listName) => dispatch(addToUser(pose_id, listName)),
  removeFromUserList: (pose_id, listName) => dispatch(removeFromUser(pose_id, listName)),
});


export default connect(mapStateToProps, mapDispatchToProps)(HeartArea);
