import React, { Component } from 'react';
import {
  Button, Form, Grid, Message, Segment,
} from 'semantic-ui-react';
import api from '../../../../API';

const MessageExampleError = () => (
  <Message
    error
    header="There was some errors with your submission"
    list={[
      'You must include both a upper and lower case letters in your password.',
      'You need to select your home country.',
    ]}
  />
);

const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) return true;
  if (rules.required) isValid = value.trim() !== '' && isValid;
  if (rules.minLength) isValid = value.length >= rules.minLength && isValid;
  if (rules.maxLength) isValid = value.length <= rules.maxLength && isValid;
  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }
  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};


export default class RegisterForm extends Component {
  state = {
    controls: {
      name: {
        value: '',
        validation: { required: true, minLength: 2 },
        valid: false,
      },
      email: {
        value: '',
        validation: { required: true, isEmail: true },
        valid: false,
      },
      password: {
        elementType: 'input',
        value: '',
        validation: { required: true, minLength: 6 },
        valid: false,
      },
    },
    badEmail: false,
    badPW: false,
    badName: false,
    isSignup: true,
  };

  formSubmit = async () => {
    const { controls: { email, password, name } } = this.state;
    const { UserLogin } = this.props;
    if (!email.valid || !password.valid || !name.valid) return; // add error message
    try {
      const res = await api.user.register(email.value, password.value, name.value);
      // const res = await axios({ method: 'POST', url, data });
      console.log('response from server', res);
      localStorage.setItem('token', res.token);
      UserLogin(res.user);
    } catch (err) {
      console.log(err);
    }
  };

  input = (e, type) => {
    const { value } = e.target;
    const { controls } = this.state;
    let updatedControls;
    switch (type) {
      case 'email':
        updatedControls = {
          ...controls,
          email: {
            ...controls.email,
            value,
            valid: checkValidity(value, controls.email.validation),
          },
        };
        break;
      case 'pw':
        updatedControls = {
          ...controls,
          password: {
            ...controls.password,
            value,
            valid: checkValidity(value, controls.password.validation),
          },
        };
        break;
      case 'name':
        updatedControls = {
          ...controls,
          name: {
            ...controls.name,
            value,
            valid: checkValidity(value, controls.name.validation),
          },
        };
        break;
      default:
        break;
    }

    this.setState({ controls: updatedControls });
  };


  displayError() {
    const { badPW } = this.state;
    if (badPW) return <MessageExampleError />;
    return null;
  }

  render = () => {
    const { login } = this.props;
    const {
      controls: { password, email, name }, badName, badEmail, badPW,
    } = this.state;

    return (
      <div className="register-form">
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size="large" onSubmit={this.formSubmit}>
              <Segment stacked>
                <Form.Input
                  error={badName}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Name"
                  value={name.value}
                  onChange={e => this.input(e, 'name')}
                />
                <Form.Input
                  error={badEmail}
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="E-mail address"
                  type="email"
                  value={email.value}
                  onChange={e => this.input(e, 'email')}
                />
                <Form.Input
                  error={badPW}
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={password.value}
                  onChange={e => this.input(e, 'pw')}
                />
                <Button type="formSubmit" color="teal" fluid size="large">


                  {'Register'}
                </Button>
              </Segment>
            </Form>
            <Message>
              {'Already have an account?'}
              <Button onClick={login} style={{ marginLeft: '10px' }}>
                {'Login'}
              </Button>
            </Message>
            {this.displayError()}
          </Grid.Column>
        </Grid>
      </div>
    );
  };
}
