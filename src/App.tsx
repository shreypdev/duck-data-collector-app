import React from "react";
import "./App.scss";
import { AppLoader, Navbar, Switcher } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
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
            <Switcher />
          </Router>
        </FirebaseAuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
