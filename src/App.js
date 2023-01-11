import React, { useEffect } from "react";
import "./App.css";
// import Footer from "./components/Footer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RemoveBackground from "./components/RemoveBackground";
import LoginPage from "./features/LoginPage";
import Register from "./features/Register";
import Forgotpassword from "./features/Forgotpassword";
import Subscription from "./features/Subscription";
import Privacypolicy from "./features/Privacy_policy";
import Termscondition from "./features/Terms_condition";
import axios from "axios";
import Test from "./StripeSub/App";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./features/Home";

import { isMobile, isDesktop, isAndroid, isIOS } from 'react-device-detect';
import { useDispatch } from "react-redux";
import { setActionDeviceStatus, setContentStatus } from "./features/removeBackground";
import Testing from "./components/Testing";
import NewTest from "./components/NewTest";



function App() {

  const dispatch = useDispatch();


  // http://hexeros.com/dev/pic-ground-api/api/V1/content
  // http://hexeros.com/dev/pic-ground-api/
  useEffect(() => {
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "api/V1/content",
    })
      .then((res) => {
        // debugger;
        dispatch(setContentStatus(res?.data?.data))
        // console.log("res", res.data)

      }).catch((e) => console.log(e));
  }, [])
  // const URL_Privacy= window.location.href.includes("privacypolicy");
  // const URL_Terms = window?.location?.href?.includes("termscondition");
  const URL_Login = window?.location?.href?.includes("login");

  return (
    <div className="App">
      <div className={ URL_Login ?  "no-scroll" : "py-auto"}>

        <BrowserRouter>
          <Header />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<RemoveBackground />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/forgotpassword" element={<Forgotpassword />} />
            {/* <Route path="/test" element={<Test />} /> */}
            {/* <Route path="/test" element={<NewTest />} />
        <Route path="/test" element={<Testing />} /> */}
            <Route exact path="/privacypolicy" element={<Privacypolicy />} />
            <Route exact path="/termscondition" element={<Termscondition />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
