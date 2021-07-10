import { call, put } from "redux-saga/effects";
import Actions from "../actions";

export function* getData() {
  yield put(Actions.showLoader());
  yield call(() => {});
}
