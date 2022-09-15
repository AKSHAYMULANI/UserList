//DECLARING ACTION TYPES

const GET_USERS_REQUEST = "GET_USERS_REQUEST";
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "GET_USERS_FAILURE";
const DELETE_USERS_REQUEST = "DELETE_USERS_REQUEST";
const DELETE_USERS_SUCCESS = "DELETE_USERS_SUCCESS";
const DELETE_USERS_FAILURE = "DELETE_USERS_FAILURE";
const ADD_USERS_REQUEST = "ADD_USERS_REQUEST";
const ADD_USERS_SUCCESS = "ADD_USERS_SUCCESS";
const ADD_USERS_FAILURE = "ADD_USERS_FAILURE";

//  ACTION TYPE FOR ADDUSERS

export const addUserRequest = () => {
  return {
    type: ADD_USERS_REQUEST,
  };
};

export const addUserSuccess = () => {
  return {
    type: ADD_USERS_SUCCESS,
  };
};

export const addUserFailure = () => {
  return {
    type: ADD_USERS_FAILURE,
  };
};

//  ACTION TYPE FOR DELETEUSERS

export const deleteUserRequest = () => {
  return {
    type: DELETE_USERS_REQUEST,
  };
};

export const deleteUserSuccess = () => {
  return {
    type: DELETE_USERS_SUCCESS,
  };
};

export const deleteUserFailure = () => {
  return {
    type: DELETE_USERS_FAILURE,
  };
};

//  ACTION TYPE FOR GETUSERSLIST

export const getUserRequest = () => {
  return {
    type: GET_USERS_REQUEST,
  };
};

export const getUserSuccess = (data) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: data,
  };
};

export const getUserFailure = () => {
  return {
    type: GET_USERS_FAILURE,
  };
};
