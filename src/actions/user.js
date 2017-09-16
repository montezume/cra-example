import * as types from '../constants/types';
import { get, post, put } from 'axios';

const addUser = () => { return { type: types.ADD_USER }};
const addUserSuccess = data => { return { type: types.ADD_USER_SUCCESS, data }};
const addUserError = error => { return { type: types.ADD_USER_ERROR, error }};

const editUser = () => { return { type: types.MODIFY_USER }};
const editUserSuccess = data => { return { type: types.MODIFY_USER_SUCCESS, data }};
const editUserError = data => { return { type: types.MODIFY_USER_ERROR, data }};

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
      post('/users', user)
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

export const modifyUser = user => {
  return function(dispatch) {
    // could add a Promise polyfill for IE
    return new Promise((resolve, reject) => {
      dispatch(editUser());
      put(`/users/${user.id}`, user)
        .then(success => {
          dispatch(editUserSuccess(success.data));
          resolve(success.data);
        }, error => {
          console.log('error', error);
          dispatch(editUserError(error));
          reject(error);
        });
    })
  }
};
