import { connect } from 'react-redux';
import { logOut } from 'store/actions/actions';
import ProfileMenu from './ProfileMenu';

const mapStateToProps = (
  { user: { name } },
) => (
  {
    userName: name,
    loggedIn: !!name,
  });
const mapDispatchToProps = {
  UserLogout: () => {
    logOut();
    localStorage.removeItem('token');
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu);
