import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CREATE_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  DELETE_USER_SUCCESS
} from "./types";

import axios from "axios";

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
  };
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

export const createNewUser = (infoUser) => {
  return async (dispatch, getState) => {
    dispatch(createUserRequest());
    try {
      const res = await axios.post(`http://localhost:8080/api/auth/signup`, infoUser);
      dispatch(createUserSuccess());
      dispatch(fetchAllUsers())
      
    } catch (error) {
      alert(error.response.data.message)
      dispatch(createUserError());
    }
  };
};
export const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};
export const createUserSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};
export const createUserError = () => {
  return {
    type: CREATE_USER_ERROR,
  };
};


export const deleteUserRedux = (username) => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.delete(`http://localhost:8080/api/user/delete/${username}`)
      console.log(res);
      dispatch(deleteUserSuccess())
      dispatch(fetchAllUsers())
    } catch (error) {
      console.log(error);
    }

  }
}
export const deleteUserSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS
  }
}
