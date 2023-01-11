import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuthStatus } from "../features/removeBackground";
import logo from "../assets/logo.jpg";



export default function Header() {
  const status = useSelector((state) => state.status.userLogin);

  const [userLogout, setuserLogout] = React.useState(false);
  const [MenuShow, setMenuShow] = React.useState(false);
  const [logutCheck, setlogutCheck] = React.useState(true)

  const navigate = useNavigate();

  console.log("status", status?.loggedIn)



  // const methodLogout = () =>
  // {
  //   setuserLogout(true) 
  // }


  // console.log("logutCheck", logutCheck)

  const dispatch = useDispatch();
  var userName = JSON.parse(localStorage.getItem("userData"));


  React.useEffect(() => {



  }, [userLogout, status])
  // console.log("logutCheck",logutCheck)

  React.useEffect(() => {
    // debugger;
    userName = JSON.parse(localStorage.getItem("userData"));

    // let data= Object.keys(status.loggedIn).length === 0;
    if(status?.loggedIn !== null)
    {
      setlogutCheck(status?.loggedIn ? Object.keys(status?.loggedIn)?.length === 0 : false)
    }else{
      setlogutCheck(true)
    }
    
    // console.log("data", status?.loggedIn ? Object.keys(status?.loggedIn)?.length === 0 : false)


    // console.log("Logged Out...", status)


  }, [userLogout, status])


  // React.useEffect(() => {


  //   setlogutCheck(true)

  // }, [])





  const handleLogout = () => {
    setuserLogout(true);
    localStorage.clear();
    navigate("/")
    // window.location.reload();
    dispatch(setAuthStatus({}));
  }
  return (

    <header>
      <div className="container-custom">
        {/* <div className="header_main">
          <Link to="/">
            <img src={logo} alt="picground logo" />
          </Link>
          <div className="button-grp">
            <ul>
              <li>Case Studies</li>
              <li>Company</li>
              <li>About us</li>
            </ul>
            {!logutCheck ? <button type="submit" className="btn-log_reg m-0" onClick={handleLogout}>
              Logout
            </button> : <Link to="/login">
              <button type="submit" className="btn-log_reg m-0" >
              Sign in
              </button>
            </Link>}            
          </div>          
        </div> */}
        <nav className="navbar navbar-expand-lg header_main">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="picground logo" />
            <p>You’ll never believe what you can<br></br> create with a single click!</p>
          </Link>
          <button className="navbar-toggler" type="button" onClick={() =>
            setMenuShow(!MenuShow)} >
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div className={MenuShow ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
            <ul className="navbar-nav button-grp">
              {/* <li className="nav-item">Case Studies</li> */}
              <li className="nav-item">hello@picground.co.uk</li>
              {/* <li className="nav-item">About us</li>                         */}
            </ul>
            {!logutCheck ? <button type="submit" className="btn-log_reg m-0" onClick={handleLogout}>
              Logout
            </button> : <Link to="/login">
              <button type="submit" className="btn-log_reg m-0" >
                Sign in
              </button>
            </Link>}
          </div>
        </nav>
      </div>
    </header>

  )
}
