import * as types from '../constants/types';

export default function user(state = {
  data: null,
  isFetching: false,
  error: false,
}, action) {
  switch (action.type) {
    case types.FETCH_USER: {
      return {
        ...state,
        data: null,
        error: false,
        isFetching: true
      };
    }
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        isFetching: false
      };
    case types.FETCH_USER_ERROR:
      return {
        ...state,
        data: null,
        isFetching: false,
        error: true
      };

    case types.MODIFY_USER_SUCCESS: {
      // if we have user data, update it.
      return {
        ...state,
        data: state.data && state.data.id === action.payload.id ? action.payload : null
      }
    }


    default:
      return state;
  }
}
