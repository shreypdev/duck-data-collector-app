/**
 *  Redux saga class init
 */
import { all, takeLatest } from "redux-saga/effects";
import * as types from "../actions/types";
import { getData } from "./data";

export default function* watch() {
  yield all([takeLatest(types.GET_DATA, getData)]);
}
