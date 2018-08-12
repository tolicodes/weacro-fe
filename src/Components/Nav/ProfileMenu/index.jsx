import { connect } from 'react-redux';
import { logOut } from '../../../store/actions/actions';
import ProfileMenu from './ProfileMenu';

const mapStateToProps = (
  { user: { name } },
) => (
  { userName: name });
const mapDispatchToProps = {
  UserLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu);
