/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// Import root app
import App from './containers/App';
import './styles/main.css';
//import ThemeProvider from './containers/ThemeProvider';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */

/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './configureStore';
// Import i18n messages

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');

history.listen(() => {
  window.scrollTo(0, 0);
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime'); // eslint-disable-line global-require

  const runInstall = () => {
    runtime.install({
      onUpdating: () => {
        MOUNT_NODE.innerHTML = `
          <div id="loading-app" class="loading-app">
            <div class="spinner">
              <div class="cube1"></div>
              <div class="cube2"></div>
            </div>
            <p>Updating Application... Please do not reload the page.<p>
          </div>`;
      },
      onUpdateReady: () => {
        runtime.applyUpdate();
      },
      onUpdated: () => {
        window.location.reload();
      }
    });
  };

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      if (registrations.length > 0) {
        runInstall();
      } else {
        setTimeout(() => {
          runInstall();
        }, 3000);
      }
    });
  }
}
