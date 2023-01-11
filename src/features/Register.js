import React from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { isMobile, isDesktop, isAndroid, isIOS } from "react-device-detect";
import { setAuthStatus } from "./removeBackground";
import Checkbox from "@mui/material/Checkbox";
export default function Register() {
  const [state, setState] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassowrd: "",
    device_type: "",
    termandCondition: false,
    userRegisterData: null,
    error: null,
  });

  useEffect(() => {
    if (isAndroid) {
      setState({ ...state, device_type: "android" });
    } else if (isIOS) {
      setState({ ...state, device_type: "ios" });
    } else {
      setState({ ...state, device_type: "web" });
    }
  }, []);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // console.log("termandCondition", state.termandCondition)

  const handleChecked = () => {
    setState({ ...state, termandCondition: !state?.termandCondition });
  };
  function handleChange(evt) {
    evt.preventDefault();
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("states", state);
    // debugger;
    if (state.confirmPassowrd === state.password) {
      if (state.termandCondition) {
        await axios({
          method: "post",
          url: process.env.REACT_APP_BASE_URL + "api/V1/signup",
          data: {
            email: state?.email,
            password: state?.password,
            device_type: "web",
            cpassword: state?.confirmPassowrd,
            username: state?.username,
          },
        })
          .then((res) => {
            console.log("res", res);
            setState({ ...state, userRegisterData: res.data });

            localStorage.setItem("userData", JSON.stringify(res.data.data));
            dispatch(setAuthStatus(res.data?.data));
            // localStorage.setItem("token", JSON.stringify(res.data.data))
            // dispatch(setAuthStatus(res.data?.data))
            alert("Successfully Registered.");
            navigate("/dashboard");
          })
          .catch((e) =>
            setState({ ...state, error: e?.response?.data?.message })
          );
      } else {
        setState({ ...state, error: "Please accept the term and condition" });
      }
    } else {
      setState({ ...state, error: "Confirm Password dosen't match" });
    }
    // await axios({
    //   method: "post",
    //   url: process.env.REACT_APP_BASE_URL + "api/V1/signup",
    //   data: {
    //     email: state?.email,
    //     password: state?.password,
    //     device_type: state?.device_type,
    //     cpassword: state?.confirmPassowrd,
    //     username: state?.username
    //   },
    // })
    //   .then((res) => {

    //     setState({ userRegisterData: res.data })
    //     // localStorage.setItem("token", JSON.stringify(res.data.data))
    //     // dispatch(setAuthStatus(res.data?.data))
    //     navigate("/login")
    //   }).catch((e) => setState({ error: e?.response?.data?.message }));
  };

  // console.log("hello", state)
  return (
    <main className="logreg_main">
      <div className="container">
        <div className="login-reg_blog">
          <h1>Register</h1>
          <form autoComplete="off">
            <div className="form-group">
              <label>User name</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Username"
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label>Email Id</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassowrd"
                className="form-control"
                placeholder="Confirm Password"
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group custom-checkbox">
              <input
                type="checkbox"
                id="ex1"
                name="termandCondition"
                checked={state.termandCondition}
                onChange={handleChecked}
              ></input>
              <label for="ex1">
                I agree with <Link to="/termscondition" >Terms of Service</Link> and {" "}
                <Link to="/privacypolicy" >Privacy Policy.</Link>
              </label>
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
              type="submit"
              className="btn-log_reg me-0 mt-3"
              onClick={handleSubmit}
            >
              REGISTER
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </main>
  );
}
