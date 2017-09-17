import * as types from '../constants/types';
import axios from 'axios';

const addUser = () => { return { type: types.ADD_USER }};
const addUserSuccess = data => { return { type: types.ADD_USER_SUCCESS, payload: data }};
const addUserError = error => { return { type: types.ADD_USER_ERROR, error }};

const deleteUser = () => { return { type: types.DELETE_USER } };
const deleteUserSuccess = data => { return { type: types.DELETE_USER_SUCCESS, payload: data } };
const deleteUserError = error => { return { type: types.DELETE_USER_ERROR, error } };

const editUser = () => { return { type: types.MODIFY_USER }};
const editUserSuccess = data => { return { type: types.MODIFY_USER_SUCCESS, payload: data }};
const editUserError = error => { return { type: types.MODIFY_USER_ERROR, error }};

const fetchUser = () => { return { type: types.FETCH_USER } };
const fetchUserSuccess = data => { return { type: types.FETCH_USER_SUCCESS, payload: data } };
const fetchUserError = error => { return { type: types.FETCH_USER_ERROR, error } };

export const createUser = user => {
  return function(dispatch) {
    // could add a Promise polyfill for IE
    return new Promise((resolve, reject) => {
      dispatch(addUser());
      axios.post('http://localhost:3001/users', user)
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

export const removeUser = id => {
  return function(dispatch) {
    // could add a Promise polyfill for IE
    return new Promise((resolve, reject) => {
      dispatch(deleteUser());
      axios.delete(`http://localhost:3001/users/${id}`)
        .then(success => {
          dispatch(deleteUserSuccess({ id }));
          resolve(success.data);
        }, error => {
          console.log('error', error);
          dispatch(deleteUserError(error));
          reject(error);
        });
    })
  }
};


export const getUser = id => {
  return function(dispatch) {
    dispatch(fetchUser());
    axios.get(`http://localhost:3001/users/${id}`)
      .then(success => {
        dispatch(fetchUserSuccess(success.data));
      }, error => {
        console.log('error', error);
        dispatch(fetchUserError(error));
      });
  }
};

export const modifyUser = user => {
  return function(dispatch) {
    // could add a Promise polyfill for IE
    return new Promise((resolve, reject) => {
      dispatch(editUser());
      axios.put(`http://localhost:3001/users/${user.id}`, user)
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
