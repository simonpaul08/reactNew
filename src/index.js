import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";



import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RemoveBackground from "./components/RemoveBackground";
import LoginPage from "./features/LoginPage";
import Register from "./features/Register";
import Forgotpassword from "./features/Forgotpassword";
import Subscription from "./features/Subscription";
import Privacypolicy from "./features/Privacy_policy";
import Termscondition from "./features/Terms_condition";
import Home from "./features/Home";
import { useEffect } from "react";
import Test from "./StripeSub/App";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <App />

    </Provider>
  </React.StrictMode >,
  document.getElementById("root")
);

serviceWorker.unregister();
