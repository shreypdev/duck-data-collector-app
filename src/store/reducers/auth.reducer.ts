import { createReducer } from "../../lib";
import {
  ILoginFailedAction,
  ILogoutFailedAction,
  ISignupFailedAction,
} from "../actions/auth.actions";
import * as types from "../actions/types";

// Interfaces
export interface IAuthState {
  loading: boolean;
  signupError?: any;
  loginError?: any;
  logoutError?: any;
  authenticated: boolean;
}

// Store
const initialState: IAuthState = {
  loading: false,
  authenticated: false,
};

export const authReducer = createReducer(initialState, {
  [types.SIGNUP_REQUESTED](state: IAuthState): IAuthState {
    return {
      ...state,
      loading: true,
    };
  },
  [types.SIGNUP_SUCCEED](state: IAuthState): IAuthState {
    return {
      ...state,
      loading: false,
      signupError: undefined,
      authenticated: true,
    };
  },
  [types.SIGNUP_FAILED](
    state: IAuthState,
    action: ISignupFailedAction
  ): IAuthState {
    return {
      ...state,
      loading: false,
      signupError: action.payload.signupError,
    };
  },
  [types.LOGIN_REQUESTED](state: IAuthState): IAuthState {
    return {
      ...state,
      loading: true,
    };
  },
  [types.LOGIN_SUCCEED](state: IAuthState): IAuthState {
    return {
      ...state,
      loading: false,
      loginError: undefined,
      authenticated: true,
    };
  },
  [types.LOGIN_FAILED](
    state: IAuthState,
    action: ILoginFailedAction
  ): IAuthState {
    return {
      ...state,
      loading: false,
      loginError: action.payload.loginError,
    };
  },
  [types.LOGOUT_REQUESTED](state: IAuthState): IAuthState {
    return {
      ...state,
      loading: true,
    };
  },
  [types.LOGOUT_SUCCEED](state: IAuthState): IAuthState {
    return {
      ...state,
      ...initialState,
    };
  },
  [types.LOGOUT_FAILED](
    state: IAuthState,
    action: ILogoutFailedAction
  ): IAuthState {
    return {
      ...state,
      loading: false,
      logoutError: action.payload.logoutError,
    };
  },
});
