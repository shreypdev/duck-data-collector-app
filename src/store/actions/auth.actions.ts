import { Action } from "redux";
import * as types from "./types";

// interfaces
export interface ISignupRequestedAction extends Action {
  payload: {
    name: string;
    email: string;
    password: string;
  };
}

export interface ISignupFailedAction extends Action {
  payload: {
    signupError: any;
  };
}

export interface ILoginRequestedAction extends Action {
  payload: {
    email: string;
    password: string;
  };
}

export interface ILoginFailedAction extends Action {
  payload: {
    loginError: any;
  };
}

export interface ILogoutFailedAction extends Action {
  payload: {
    logoutError: any;
  };
}

// actions
export const signup = (
  name: string,
  email: string,
  password: string
): ISignupRequestedAction => {
  return {
    type: types.SIGNUP_REQUESTED,
    payload: {
      name,
      email,
      password,
    },
  };
};

export const signupSuccess = (): Action => {
  return {
    type: types.SIGNUP_SUCCEED,
  };
};

export const signupFail = (error: any): ISignupFailedAction => {
  return {
    type: types.SIGNUP_FAILED,
    payload: {
      signupError: error,
    },
  };
};

export const login = (
  email: string,
  password: string
): ILoginRequestedAction => {
  return {
    type: types.LOGIN_REQUESTED,
    payload: {
      email,
      password,
    },
  };
};

export const loginSuccess = (): Action => {
  return {
    type: types.LOGIN_SUCCEED,
  };
};

export const loginFail = (error: any): ILoginFailedAction => {
  return {
    type: types.LOGIN_FAILED,
    payload: {
      loginError: error,
    },
  };
};

export const logout = (): Action => {
  return {
    type: types.LOGOUT_REQUESTED,
  };
};

export const logoutSuccess = (): Action => {
  return {
    type: types.LOGOUT_SUCCEED,
  };
};

export const logoutFail = (error: any): ILogoutFailedAction => {
  return {
    type: types.LOGOUT_FAILED,
    payload: {
      logoutError: error,
    },
  };
};
