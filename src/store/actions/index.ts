// export action creators
import * as loaderActions from "./loader.actions";
import * as authActions from "./auth.actions";

const Actions = {
  ...loaderActions,
  ...authActions,
};

export default Actions;
