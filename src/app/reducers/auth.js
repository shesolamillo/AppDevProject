import {
  USER_LOGIN,
  USER_LOGIN_COMPLETED,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_RESET,
  USER_REGISTER,
  USER_REGISTER_COMPLETED,
  USER_REGISTER_ERROR,
  USER_REGISTER_REQUEST,
  USER_REGISTER_RESET,
  USER_LOGOUT,
} from '../actions';

const INITIAL_STATE = {
  user: null,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        user: null,
        isLoading: true,
        isError: false,
        errorMessage: null,
      };

    case USER_LOGIN_COMPLETED:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isError: false,
        errorMessage: null,
      };

    case USER_LOGIN_ERROR:
      return {
        user: null,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    case USER_LOGIN_RESET:
      return INITIAL_STATE;

    case USER_REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: null,
      };

    case USER_REGISTER_COMPLETED:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isError: false,
        errorMessage: null,
      };

    case USER_REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    case USER_REGISTER_RESET:
      return INITIAL_STATE;

    case USER_LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
}

// Action Creators
export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const userRegister = (payload) => ({
  type: USER_REGISTER,
  payload,
});

export const resetLogin = () => ({
  type: USER_LOGIN_RESET,
});

export const resetRegister = () => ({
  type: USER_REGISTER_RESET,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});
