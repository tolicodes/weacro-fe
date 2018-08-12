import React from 'react';
import Popup from '../Popup/Popup';
import { SignOutIcon, MenuItem } from './style';

const ProfileMenu = ({ loggedIn, userName, UserLogout }) => (
  (!loggedIn)
    ? <Popup />
    : (
      <MenuItem onClick={UserLogout}>
        <SignOutIcon />
        {userName}
      </MenuItem>
    ));


export default ProfileMenu;
