import React from 'react';
import { connect } from 'react-redux';
import Popup from '../Popup';
import { LOG_OUT } from '../../../store/actions/actionTypes';
import { SignOutIcon, MenuItem } from './style';

const ProfileMenu = ({ userName, UserLogout }) => {
  const logOut = () => {
    localStorage.removeItem('token');
    UserLogout();
  };
  if (!userName) {
    return <Popup />;
  }
  return (
    <MenuItem onClick={logOut} >
      <SignOutIcon />
      {userName}
    </MenuItem>
  );
};

const mapStateToProps = ({ user: { name } }) => ({ userName: name });
const mapDispatchToProps = dispatch => ({
  UserLogout: () => dispatch({
    type: LOG_OUT,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu);
