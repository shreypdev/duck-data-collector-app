import { call, put } from "redux-saga/effects";
import Actions from "../actions";
import {
  ILoginRequestedAction,
  ISignupRequestedAction,
} from "../actions/auth.actions";
import firebase from "firebase";

export function* signupAsync(action: ISignupRequestedAction) {
  const { name, email, password } = action.payload;
  yield put(Actions.showLoader());

  try {
    const auth = firebase.auth();
    const response: firebase.auth.UserCredential = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      email,
      password
    );

    const { user } = response;

    if (user) {
      yield call([user, user.updateProfile], {
        displayName: name,
      });
      yield put(Actions.signupSuccess());
      yield put(Actions.hideLoader());
    }
  } catch (error) {
    yield put(Actions.signupFail(error));
    yield put(Actions.hideLoader());
  }
}

export function* loginAsync(action: ILoginRequestedAction) {
  const { email, password } = action.payload;
  yield put(Actions.showLoader());

  try {
    const auth = firebase.auth();
    const response: firebase.auth.UserCredential = yield call(
      [auth, auth.signInWithEmailAndPassword],
      email,
      password
    );

    const { user } = response;

    if (user) {
      yield put(Actions.loginSuccess());
      yield put(Actions.hideLoader());
    }
  } catch (error) {
    yield put(Actions.loginFail(error));
    yield put(Actions.hideLoader());
  }
}

export function* logoutAsync() {
  yield put(Actions.showLoader());

  try {
    const auth = firebase.auth();
    yield call([auth, auth.signOut]);

    yield put(Actions.logoutSuccess());
    yield put(Actions.hideLoader());
  } catch (error) {
    yield put(Actions.logoutFail(error));
    yield put(Actions.hideLoader());
  }
}
