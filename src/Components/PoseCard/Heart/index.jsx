import { connect } from 'react-redux';
import { addToUser, removeFromUser } from 'store/actions/actions';
import api from 'API';
import HeartModeSetter from './HeartModeSetter';

const mapStateToProps = ({
  view: { tag },
  user: { name, lists, id },
}) => ({
  guestMode: !name && !tag,
  lists,
  userID: id,
});

const mapDispatchToProps = {
  addToUserList: (poseID, userID) => {
    api.list.add(poseID, userID, 'Favorites');
    addToUser(poseID, 'Favorites');
  },
  removeFromUserList: (poseID, userID) => {
    api.list.remove(poseID, userID, 'Favorites');
    removeFromUser(poseID, 'Favorites');
  },
};


export default connect(mapStateToProps, mapDispatchToProps)(HeartModeSetter);
