import React, { Component } from 'react';
import {
  Button, Form, Grid, Message, Segment,
} from 'semantic-ui-react';
import api from 'API';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  formSubmit = async () => {
    try {
      const { UserLogin } = this.props;
      const res = await api.user.login(this.state);
      localStorage.setItem('token', res.token);
      const newUser = await api.user.get();
      UserLogin(newUser);
    } catch (err) {
      console.log(err);
    }
  };

  render = () => {
    const { email, password } = this.state;
    const { register } = this.props;
    return (
      <div>
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size="large" onSubmit={this.formSubmit} warning>
              <Segment style={{ marginLeft: '10px' }} stacked>
                <Form.Input
                  fluid
                  icon="mail"
                  iconPosition="left"
                  type="email"
                  placeholder="E-mail address"
                  onChange={e => this.setState({ [e.target.type]: e.target.value })}
                  value={email}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={e => this.setState({ [e.target.type]: e.target.value })}
                  value={password}
                />
                <Button color="teal" fluid size="large">
                  {'Login'}
                </Button>
              </Segment>
            </Form>
            <Message style={{ marginTop: '6vh' }}>
              {"Don't have an account yet?"}
              <Button onClick={register} style={{ marginLeft: '10px' }}>
                {'Register'}
              </Button>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
