import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducers, { IState } from "./reducers"; // where reducers is a object of reducers
import sagas from "./sagas";

const config = {
  key: "root",
  storage: storage,
  blacklist: ["loaderReducer"],
  debug: true,
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (process.env.NODE_ENV === "development") {
  middleware.push(createLogger());
}

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
const persistConfig: any = { enhancers };

export const store = createStore(reducers, undefined, compose(...enhancers));
export const getGlobalState = (): IState => store.getState();
export const persistor = persistStore(store, persistConfig);

sagaMiddleware.run(sagas);
