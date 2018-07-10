import React, { Component } from 'react';
import RegisterForm from './Register';
import LoginForm from './Login';
import LoadIf from '../../UI/LoadIf';
import { PopupModal, StyledLoginButton, LoginIcon, MenuItem } from './style'
class Popup extends Component {
  state = { form: 'register' };
  changeForm = () => {
    if (this.state.form === 'login')
      this.setState({ form: 'register' });
    else this.setState({ form: 'login' });
  };
  determineForm = () => this.state.form === 'login' ? (
    <LoginForm register={this.changeForm} />
  ) : (
    <RegisterForm login={this.changeForm} />
  )
  render = () => (
    <React.Fragment>
      <LoadIf.Desktop>
        <PopupModal size="mini" trigger={<StyledLoginButton>LOGIN</StyledLoginButton>}>
          {this.determineForm()}
        </PopupModal>
      </LoadIf.Desktop>
      <LoadIf.Portrait>
        <PopupModal size="tiny" trigger={<MenuItem><LoginIcon /></MenuItem>}>         
        {this.determineForm()}
        </PopupModal>
      </LoadIf.Portrait>
    </React.Fragment>
  );
}

export default Popup;