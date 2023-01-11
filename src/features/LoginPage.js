import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { isMobile, isDesktop, isAndroid, isIOS } from "react-device-detect";
import { setAuthStatus } from "./removeBackground";

export default function LoginPage() {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    device_type: "",
    userData: null,
    error: null,
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  // console.log("stateValue",state)

  useEffect(() => {
    if (isAndroid) {
      setState({ ...state, device_type: "android" });
    } else if (isIOS) {
      setState({ ...state, device_type: "ios" });
    } else {
      setState({ ...state, device_type: "web" });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("state", state);

    await axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "api/V1/login",
      data: {
        email: state.email,
        password: state.password,
        device_type: "android",
      },
    })
      .then((res) => {
        
        setState({ ...state, userData: res.data });
        localStorage.setItem("userData", JSON.stringify(res.data.data));
        dispatch(setAuthStatus(res.data?.data));
        // alert("Successfully Registered.")
        navigate("/dashboard");
      })
      .catch((e) => setState({ ...state,error: e?.response?.data?.message }));
  };
  const URL_DATA = window?.location?.href?.includes("loginpage");
  return (
    <main className="logreg_main">
      <div className="container">
        <div className="login-reg_blog">
          <h1>Login</h1>
          <p>
            Don’t have an account?{" "}
            <Link to="/register">
              <span>Register</span>
            </Link>
          </p>
          <form >
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                autoComplete="false"
                onChange={(e) => handleChange(e)}
                className="form-control"
                placeholder="Email"
              ></input>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                autoComplete="false"
                type="password"
                name="password"
                onChange={(e) => handleChange(e)}
                className="form-control"
                placeholder="Password"
              ></input>
            </div>
            <div className="form-group mb-0 text-right">
              <Link to="/forgotpassword">
                <span>Forgot Password?</span>
              </Link>
            </div>
            {state.error && (
              <p
                style={{
                  color: "red",
                  fontSize: 13,
                  textTransform: "capitalize",
                }}
              >
                {state.error}
              </p>
            )}
            {/* <Link to="/"> */}
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn-log_reg me-0 mt-3"
            >
              LOGIN
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </main>
  );
}
