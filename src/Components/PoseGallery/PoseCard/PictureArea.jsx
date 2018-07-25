import React from 'react';
import { connect } from 'react-redux';
import LoadIf from '../../UI/LoadIf';
import PosePicture from './PoseParts/Picture';
import Heart from './PoseParts/Heart';
import { removeFromUser, addToUser } from '../../../store/actions/actions';
import { removeFromFavorites, addToFavorites } from '../helpers';
import PoseText from './PoseParts/Text';
import { Details } from './style';


const PictureArea = ({
  img,
  userName,
  tag,
  poseID,
  lists,
  removeFromUserList,
  addToUserList,
  userID,
  name,
  subtitle
}) => (
  <React.Fragment>
    <PosePicture img={img} />
    <LoadIf.notPortrait>
      <Details>
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
        <PoseText poseTitle={name} subtitle={subtitle} />
      </Details>
    </LoadIf.notPortrait>
  </React.Fragment>
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
