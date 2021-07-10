import { Action } from "redux";
import * as types from "./types";

export interface ILoaderShowedAction extends Action {
  payload: {
    message: string;
  };
}

export function showLoader(message?: string): ILoaderShowedAction {
  return {
    type: types.LOADER_SHOWED,
    payload: {
      message: message ? message : "",
    },
  };
}

export function hideLoader(): Action {
  return {
    type: types.LOADER_HID,
  };
}
