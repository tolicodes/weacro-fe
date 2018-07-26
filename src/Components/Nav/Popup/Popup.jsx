import React from 'react';
import LoadIf from '../../UI/LoadIf';
import {
  PopupModal, StyledLoginButton, LoginIcon, MenuItem,
} from './style';
import DisplayForm from './DisplayForm';

function DesktopVersion() {
  return (
    <PopupModal
    size="mini"
    trigger={<StyledLoginButton>LOGIN</StyledLoginButton>}
  >
    <DisplayForm />
  </PopupModal>
  )
}

export default function Popup() {
  return (
    <React.Fragment>
      <LoadIf.Desktop>
        <DesktopVersion />
      </LoadIf.Desktop>
      <LoadIf.Portrait>
        <PopupModal
          size="tiny"
          trigger={(<MenuItem><LoginIcon /></MenuItem>)}
        >
          <DisplayForm />
        </PopupModal>
      </LoadIf.Portrait>
    </React.Fragment>
  );
}
