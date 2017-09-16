import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux';

import user from './user';
import users from './users';

// Combine reducers with routeReducer which keeps track of
// router state

const rootReducer = combineReducers({
  routerReducer,
  user,
  users
});

export default rootReducer;
