/*
 * combines all th existing reducers
 */
import * as loaderReducer from "./loader.reducer";
import * as authReducer from "./auth.reducer";

export interface IState {
  loaderReducer: loaderReducer.ILoaderState;
  authReducer: authReducer.IAuthState;
}

const Reducers = {
  ...loaderReducer,
  ...authReducer,
};

export default Reducers;
