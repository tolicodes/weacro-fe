import React from 'react';
import Popup from '../Popup/Popup';
import { SignOutIcon, MenuItem } from './style';

function ProfileMenu({ userName, UserLogout }) {
  const logUserOut = () => {
    localStorage.removeItem('token');
    UserLogout();
  };
  if (!userName) {
    return <Popup />;
  }
  return (
    <MenuItem onClick={logUserOut}>
      <SignOutIcon />
      {userName}
    </MenuItem>
  );
}


export default ProfileMenu;
