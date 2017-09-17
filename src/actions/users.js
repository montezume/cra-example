import * as types from '../constants/types';
import { get } from 'axios';

const fetchUsers = () => { return { type: types.FETCH_USERS } };
const fetchUsersSuccess = data => { return { type: types.FETCH_USERS_SUCCESS, payload: data } };
const fetchUsersError = error => { return { type: types.FETCH_USERS_ERROR, error } };

export const getUsers = () => {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      dispatch(fetchUsers());
      get('http://localhost:3001/users')
        .then(success => {
          dispatch(fetchUsersSuccess(success.data));
          resolve(success.data);
        }, error => {
          dispatch(fetchUsersError(error));
          reject(error.data);
        });
    });
  }
};
