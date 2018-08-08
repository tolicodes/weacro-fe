import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import WebFont from 'webfontloader';
import { ConnectedRouter } from 'connected-react-router';
import registerServiceWorker from 'registerServiceWorker';
import Router from 'Router';
import store from 'store';
import history from 'store/history';
import LoadInitialServerData from './Loader';

WebFont.load({
  google: {
    families: ['Special Elite:300,400,700', 'Roboto Condensed:300,400,700', 'Lato:300,400,700'],
  },
});

ReactDOM.render(
  /* eslint-disable */
  <Provider store={store}>
  <LoadInitialServerData>
    <ConnectedRouter history={history}>
        <Router />
    </ConnectedRouter>
    </LoadInitialServerData>
  </Provider>,
  /* eslint-enable */
  document.getElementById('root'),
);

registerServiceWorker();
