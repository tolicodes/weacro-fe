import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import WebFont from 'webfontloader';
import registerServiceWorker from 'registerServiceWorker';
import store from 'store';
import App from './App';

WebFont.load({
  google: {
    families: ['Special Elite:300,400,700', 'Roboto Condensed:300,400,700', 'Lato:300,400,700'],
  },
});

ReactDOM.render(
  /* eslint-disable */
  <Provider store={store}>
    <App />
  </Provider>,
  /* eslint-enable */
  document.getElementById('root'),
);

registerServiceWorker();
