import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import history from 'store/history';
import { ThemeProvider } from 'styled-components';
import { asyncGetPoses, asyncGetUser } from 'store/actions/actions';
import { connect } from 'react-redux';
import Router from 'Router';
import theme from 'Common/theme';

const App = ({ getPoses, getUser }) => {
  getPoses();
  getUser();
  return (
    <ThemeProvider theme={theme()}>
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    </ThemeProvider>
  );
};

const mapDispatchToProps = {
  getPoses: asyncGetPoses,
  getUser: asyncGetUser,
};

export default connect(null, mapDispatchToProps)(App);
