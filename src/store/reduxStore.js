import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers' // Or wherever you keep your reducers



const createReduxStore = () => {
  // Create a history of your choosing (we're using a browser history in this case)
  const history = createHistory();

  // Build the middleware for intercepting and dispatching navigation actions
  const middleware = routerMiddleware(history);

  // Add the reducer to your store on the `router` key
  // Also apply our middleware for navigating

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    // initialState
    {},
    composeEnhancers(applyMiddleware(middleware, thunk)
  ));

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const newRootReducer = require('../reducers').default;
        store.replaceReducer(newRootReducer);
      });
    }
  }

  return store;
};

export default createReduxStore;
