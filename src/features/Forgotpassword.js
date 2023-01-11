import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';



export default function Forgotpassword() {
  const [state, setState] = React.useState({
    email: "",


    userForgotPassData: null,
    error: null
  });




  const dispatch = useDispatch();
  function handleChange(evt) {

    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("states", state);

    await axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "api/V1/forgot_password",
      data: {
        email: state?.email,

      },
    })
      .then((res) => {

        setState({ userForgotPassData: res.data })
        // localStorage.setItem("token", JSON.stringify(res.data.data))
        // dispatch(setAuthStatus(res.data?.data))
        alert("Reset password link is sucessfully sent to your email address")

      }).catch((e) => setState({ ...state, error: e?.response?.data?.message }));


  }

  return (
    <main className='logreg_main'>
      <div className='container'>
        <div className='login-reg_blog'>
          <h1>Forgot Password</h1>
          <form>
            <div className='form-group'>
              <label>Email</label>
              <input type='email' onChange={(e) => handleChange(e)} autoComplete='true' name="email" className='form-control' placeholder='Email'></input>
            </div>
            {state.error && <p style={{ color: 'red', fontSize: 13 , textTransform:"capitalize" }}>{state.error}</p>}
            <Link to="/">
              <button type="submit" className="btn-log_reg me-0 mt-3" onClick={handleSubmit}>Change Password</button>
            </Link>
          </form>
        </div>
      </div>
    </main>
  )
}
