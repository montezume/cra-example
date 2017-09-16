import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

import App from './containers/App';
import createReduxStore from './store/reduxStore';
import './index.css';

const rootEl = document.getElementById('root');

// // Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
const newStore = createReduxStore();

const renderApp = (Component) => {
  ReactDOM.render(
    <Provider store={newStore}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    rootEl
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    renderApp(NextApp);
  })
}

registerServiceWorker();
