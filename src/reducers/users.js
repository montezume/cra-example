import * as types from '../constants/types';

const sortAlphabetically = (propertyA, propertyB) => {
  const textA = propertyA.name.toUpperCase();
  const textB = propertyB.name.toUpperCase();
  return (textA < textB) ? - 1 : (textA > textB) ? 1 : 0;
}

export default function users(state = {
  data: null,
  isFetching: false,
  error: false,
}, action) {
  switch (action.type) {

    case types.ADD_USER_SUCCESS: {
      // if we have user data, add it
      return {
        ...state,
        data: state.data && state.data.concat([action.payload]).sort(sortAlphabetically)
      }
    }

    case types.DELETE_USER_SUCCESS: {
      // if we have user data, remove this user
      return {
        ...state,
        data: state.data && state.data.filter((user) => user.id !== action.payload.id).sort(sortAlphabetically)
      }
    }

    case types.MODIFY_USER_SUCCESS: {
      // if we have user data, update it.
      return {
        ...state,
        data: state.data && state.data.map((user) => user.id !== action.payload.id ? user : action.payload).sort(sortAlphabetically)
      }
    }

    case types.FETCH_USERS: {
      return {
        ...state,
        data: null,
        error: false,
        isFetching: true
      };
    }
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload && action.payload.sort(sortAlphabetically),
        error: false,
        isFetching: false
      };
    case types.FETCH_USERS_ERROR:
      return {
        ...state,
        data: null,
        isFetching: false,
        error: true
      };

    default:
      return state;
  }
}
