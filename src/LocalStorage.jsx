import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext(null);

class LocalStorage extends Component {
  static Connect() {
    return (
      <Consumer>
        {this.props.children}
      </Consumer>
    );
  }

  logUserOut() {
    localStorage.removeItem('token');
    UserLogout();
  }

  render() {
    return (
      <Provider>
        {this.props.children}
      </Provider>
    );
  }
}

const mapStateToProps = ({ user: { name } }) => ({ userName: name });
const mapDispatchToProps = dispatch => ({
  UserLogout: () => dispatch({
    type: LOG_OUT,
  }),
});
export default connect(mapStateToProps, mapDispatchToProps)(User);
