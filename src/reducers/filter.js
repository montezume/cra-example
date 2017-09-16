import * as types from '../constants/types';

export default function filter(state = {
  data: {
    name: ''
  },
}, action) {
  switch (action.type) {
    case types.CLEAR_FILTER:
      return {
        ...state,
        data: {
          name: ''
        }
      };

    case types.UPDATE_FILTER: {
      return {
        ...state,
        data: action.payload
      };
    }
    default:
      return state;
  }
}
