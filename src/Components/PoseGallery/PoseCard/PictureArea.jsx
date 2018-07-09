import React from 'react';
import { connect } from 'react-redux';
import Media from 'react-media';
import LoadIf from '../../UI/LoadIf';
import PosePicture from './PoseParts/Picture';
import Heart from './PoseParts/Heart';
import { remove_from_user, add_to_user } from '../../../store/actions/actions';
import { removeFromFavorites, addToFavorites } from '../helpers';

const HeartDisplay = ({
  userName, tag, poseID, lists, userID, removeFromUserList, addToUserList,
}) => {
  if (!userName && !tag) { return <div />; }
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

const PictureArea = ({
  img,
  type,
  ...rest
}) => (
  <div>
    <PosePicture img={img} />
    <LoadIf.notPortrait>
      <HeartDisplay {...rest} />
    </LoadIf.notPortrait>
  </div>
);

const mapStateToProps = ({ view: { tag }, user: { name, lists, id } }) => ({
  userName: name,
  tag,
  lists,
  userID: id,
});

const mapDispatchToProps = dispatch => ({
  addToUserList: (pose_id, listName) => dispatch(add_to_user(pose_id, listName)),
  removeFromUserList: (pose_id, listName) => dispatch(remove_from_user(pose_id, listName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PictureArea);
