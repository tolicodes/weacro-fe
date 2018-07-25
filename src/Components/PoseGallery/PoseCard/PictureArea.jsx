import React from 'react';
import { connect } from 'react-redux';
import LoadIf from '../../UI/LoadIf';
import PosePicture from './PoseParts/Picture';
import Heart from './PoseParts/Heart';
import { removeFromUser, addToUser } from '../../../store/actions/actions';
import { removeFromFavorites, addToFavorites } from '../helpers';


const PictureArea = ({
  img,
  userName,
  tag,
  poseID,
  lists,
  removeFromUserList,
  addToUserList,
  userID,
}) => (
  <div className="pose_display_and_actions_box">
    <PosePicture img={img} />
    <LoadIf.notPortrait>
      {!userName && !tag ? (
        
        <Heart
          key={`${poseID}heart`}
          poseID={poseID}
          isFavorite={false}
          isGuest={true}
          userID={userID}
        />
      ) : (
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
      )}
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
  addToUserList: (pose_id, listName) => dispatch(addToUser(pose_id, listName)),
  removeFromUserList: (pose_id, listName) => dispatch(removeFromUser(pose_id, listName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PictureArea);
