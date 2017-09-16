import * as types from '../constants/types';
import { get, post } from 'axios';

const addUser = () => { return { type: types.ADD_USER }};
const addUserSuccess = data => { return { type: types.ADD_USER_SUCCESS, data }};
const addUserError = data => { return { type: types.ADD_USER_SUCCESS, data }};

const fetchUser = () => { return { type: types.FETCH_USER } };
const fetchUserSuccess = data => { return { type: types.FETCH_USER_SUCCESS, payload: data } };
const fetchUserError = error => { return { type: types.FETCH_USER_ERROR, error } };

export const getUser = id => {
  return function(dispatch) {
    dispatch(fetchUser());
    get(`/users/${id}`)
      .then(success => {
        dispatch(fetchUserSuccess(success.data));
      }, error => {
        console.log('error', error);
        dispatch(fetchUserError(error));
      });
  }
};

export const createUser = user => {
  return function(dispatch) {
    // could add a Promise polyfill for IE
    return new Promise((resolve, reject) => {
      dispatch(addUser());
      post(`/users`, user)
        .then(success => {
          dispatch(addUserSuccess(success.data));
          resolve(success.data);
        }, error => {
          console.log('error', error);
          dispatch(addUserError(error));
          reject(error);
        });
    })
  }
};
