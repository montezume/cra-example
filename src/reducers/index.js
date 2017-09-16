import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux';

import users from './users';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  routerReducer,
  users
});

export default rootReducer;
