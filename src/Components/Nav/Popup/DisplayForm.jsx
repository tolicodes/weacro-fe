import React, { PureComponent } from 'react';
import LoginForm from './Login';
import RegisterForm from './Register';

export default class DisplayForm extends PureComponent {
  state = { form: 'register' };

  changeForm = () => {
    const { form } = this.state;
    if (form === 'login') { this.setState({ form: 'register' }); } else this.setState({ form: 'login' });
  };

  determineForm = () => {
    const { form } = this.state;
    if (form === 'login') { return <LoginForm register={this.changeForm} />; }
    return <RegisterForm login={this.changeForm} />;
  }

  render = () => {
    const { state: { form } } = this;
    if (form === 'register') return <RegisterForm login={this.changeForm} />;
    return <LoginForm register={this.changeForm} />;
  }
}
