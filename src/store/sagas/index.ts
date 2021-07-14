/**
 *  Redux saga class init
 */
import { all, takeLatest } from "redux-saga/effects";
import * as types from "../actions/types";
import { loginAsync, logoutAsync, signupAsync } from "./auth";
import { getData } from "./data";

export default function* watch() {
  yield all([
    takeLatest(types.GET_DATA, getData),
    takeLatest(types.SIGNUP_REQUESTED, signupAsync),
    takeLatest(types.LOGIN_REQUESTED, loginAsync),
    takeLatest(types.LOGOUT_REQUESTED, logoutAsync),
  ]);
}
