import React from 'react';
import ReactDOM from 'react-dom';
import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

import 'semantic-ui-css/semantic.min.css';
import WebFont from 'webfontloader';
import registerServiceWorker from './registerServiceWorker';
import Router from './Router';
import pose from './store/reducers/pose';
import user from './store/reducers/user';
import view from './store/reducers/view';

import saga from './saga';

WebFont.load({
  google: {
    families: ['Special Elite:300,400,700', 'Roboto Condensed:300,400,700', 'Lato:300,400,700'],
  },
});

const history = createBrowserHistory();
const reducer = combineReducers({ view, pose, user });
const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(reducer),
  {},
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
    ),
  ),
);

sagaMiddleware.run(saga);

ReactDOM.render(
  /* eslint-disable */
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  /* eslint-enable */
  document.getElementById('root'),
);

registerServiceWorker();
