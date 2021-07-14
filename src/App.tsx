import React from "react";
import "./App.scss";
import { AppLoader, Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, ProvideData, NotFound, Login, Signup } from "./pages";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";
import "rsuite/dist/styles/rsuite-default.css";

function App() {
  var firebaseConfig = {
    apiKey: "AIzaSyAJmY1akBOhTnZ-xJ1neo5sr9aRO--riBk",
    authDomain: "duck-data-collector.firebaseapp.com",
    projectId: "duck-data-collector",
    storageBucket: "duck-data-collector.appspot.com",
    messagingSenderId: "1015118581561",
    appId: "1:1015118581561:web:9f6ecd7f1a3955fd6de2e8",
    measurementId: "G-BJLYDZRRJY",
    databaseURL: "DATABASE_URL",
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
          <Router>
            <AppLoader />
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/provide-data" exact component={ProvideData} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </FirebaseAuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
