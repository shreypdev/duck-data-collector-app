import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, RouteProps, Redirect } from "react-router-dom";
import {
  Home,
  ProvideData,
  NotFound,
  Login,
  Signup,
  CheckData,
} from "../../pages";
import { IState } from "../../store/reducers";

// Helpers
const AuthGuardedRoute: React.FC<RouteProps> = (props) => {
  if (!useSelector((state: IState) => state.authReducer.authenticated))
    return <Redirect to="/" />;

  return <Route {...props} />;
};

const UnauthorizedOnlyRoute: React.FC<RouteProps> = (props) => {
  if (useSelector((state: IState) => state.authReducer.authenticated))
    return <Redirect to="/" />;

  return <Route {...props} />;
};

// Main
export const Switcher: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/provide-data" exact component={ProvideData} />
      <AuthGuardedRoute path="/check-data" exact component={CheckData} />
      <UnauthorizedOnlyRoute path="/login" exact component={Login} />
      <UnauthorizedOnlyRoute path="/signup" exact component={Signup} />
      <Route component={NotFound} />
    </Switch>
  );
};
