import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  routerReducer,
});

export default rootReducer;
