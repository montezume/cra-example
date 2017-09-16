import * as types from '../constants/types';
import { get } from 'axios';

const fetchUser = () => { return { type: types.FETCH_USER } };
const fetchUserSuccess = data => { return { type: types.FETCH_USER_SUCCESS } };
const fetchUserError = error => { return { type: types.FETCH_USER_ERROR } };

export const getUser = (id) => {
  return function(dispatch) {
    dispatch(fetchUser());
    get(`users/${id}`)
      .then(success => {
        dispatch(fetchUserSuccess(success.data));
      }, error => {
        console.log('error', error);
        dispatch(fetchUserError(error));
      });
  }
};
