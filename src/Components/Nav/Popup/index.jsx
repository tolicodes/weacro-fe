import React from 'react';
import RegisterForm from './Register';
import LoginForm from './Login';
import LoadIf from '../../UI/LoadIf';
import { PopupModal, StyledLoginButton, LoginIcon, MenuItem } from './style'
import DisplayForm from './DisplayForm';

export default function Popup() {
  return (
    <React.Fragment>
      <LoadIf.Desktop>
        <PopupModal size="mini" trigger={<StyledLoginButton>LOGIN</StyledLoginButton>}>
          <DisplayForm />
        </PopupModal>
      </LoadIf.Desktop>
      <LoadIf.Portrait>
        <PopupModal size="tiny" trigger={<MenuItem><LoginIcon /></MenuItem>}>         
          <DisplayForm />
        </PopupModal>
      </LoadIf.Portrait>
    </React.Fragment>
  )
}