import { createReducer } from "../../lib";
import * as types from "../actions/types";
import { ILoaderShowedAction } from "../actions/loader.actions";

export interface ILoaderState {
  isShowing: boolean;
  message: string;
}

const initialState: ILoaderState = {
  isShowing: false,
  message: "",
};

export const loaderReducer = createReducer(initialState, {
  [types.LOADER_SHOWED](
    state: ILoaderState,
    action: ILoaderShowedAction
  ): ILoaderState {
    return { ...state, isShowing: true, message: action.payload.message };
  },
  [types.LOADER_HID](state: ILoaderState): ILoaderState {
    return { ...state, isShowing: false, message: "" };
  },
});
