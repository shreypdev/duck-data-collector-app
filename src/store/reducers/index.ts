/*
 * combines all th existing reducers
 */
import * as loaderReducer from "./loader.reducer";

export interface IState {
  loaderReducer: loaderReducer.ILoaderState;
}

const Reducers = {
  ...loaderReducer,
};

export default Reducers;
