import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from "./types";

import axios from 'axios'

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const fetchAllUsers = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUserRequest());
        try {
          const res = await axios.get("http://localhost:8080/api/user/getAll");
          const data = res?.data;
          dispatch(fetchUserSuccess(data));
        } catch (error) {
          console.log(error);
          dispatch(fetchUserError());
        }
    }
};

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
};

export const fetchUserError = () => {
  return {
    type: FETCH_USER_ERROR,
  };
};
