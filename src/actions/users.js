import * as types from '../constants/types';
import { get } from 'axios';

const fetchUsers = () => { return { type: types.FETCH_USERS } };
const fetchUsersSuccess = data => { return { type: types.FETCH_USERS_SUCCESS, payload: data } };
const fetchUsersError = error => { return { type: types.FETCH_USERS_ERROR, error } };

export const getUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsers());
    get('./users')
      .then(success => {
        console.log('success', success);
        dispatch(fetchUsersSuccess(success.data));
      }, error => {
        dispatch(fetchUsersError(error));
      });
  }
};
