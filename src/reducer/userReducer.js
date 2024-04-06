import {
  CREATE_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  DELETE_USER_REQUEST,
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "../action/types";

const INITIAL_STATE = {
  listUsers: [],
  isLoading: false,
  isError: false,
  isSubmit: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        listUsers: action.payload,
        isLoading: false,
        isError: false,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case CREATE_USER_REQUEST:
      return {
        ...state,
        isSubmit: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isSubmit: false,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        isSubmit: false,
      };

    default:
      return state;
  }
};

export default userReducer;
