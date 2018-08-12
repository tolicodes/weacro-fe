import { connect } from 'react-redux';
import { addToUser, removeFromUser } from 'store/actions/actions';
import HeartModeSetter from './HeartModeSetter';

const mapStateToProps = ({
  view: { tag },
  user: { name, lists, id },
}) => ({
  userName: name,
  tag,
  lists,
  userID: id,
});

const mapDispatchToProps = {
  addToUserList: addToUser,
  removeFromUserList: removeFromUser,
};


export default connect(mapStateToProps, mapDispatchToProps)(HeartModeSetter);
