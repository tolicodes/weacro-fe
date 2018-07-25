import React, { PureComponent } from 'react';
import LoginForm from './Login';
import RegisterForm from './Register';

export default class DisplayForm extends PureComponent {
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
  render = () => {
    if (this.state.form==='register') return <RegisterForm login={this.changeForm} />;
    else return <LoginForm register={this.changeForm} />;
  }
};