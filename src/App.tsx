import React from "react";
import "./App.scss";
import { Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";

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
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </Router>
        </FirebaseAuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
