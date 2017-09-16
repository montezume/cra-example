import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux';

import filter from './filter';
import user from './user';
import users from './users';

// Combine reducers with routeReducer which keeps track of
// router state

const rootReducer = combineReducers({
  filter,
  routerReducer,
  user,
  users
});

export default rootReducer;
