import React from 'react';
import BeforeAfterSlider from "react-before-after-slider";
import ReactCompareImage from "react-compare-image";
import home_car from '../assets/home_car.png';
import originalImg from '../assets/original-img.png';
import removeImg from '../assets/remove-img.png';
import chooseImg from '../assets/choose-img.png';
import uploadImg from '../assets/upload-img.png';
import removebgImg from '../assets/removebg-img.png';
import image1 from '../assets/carimg1.png';
import imagerm1 from '../assets/rm_carimg1.png';
import axios from 'axios';
import image2 from '../assets/carimg2.png';
import imagerm2 from '../assets/rm_carimg2.png';
import image3 from '../assets/carimg3.png';
import imagerm3 from '../assets/rm_carimg3.png';
import image4 from '../assets/carimg4.png';
import imagerm4 from '../assets/rm_carimg4.png';
import image5 from '../assets/carimg5.png';
import imagerm5 from '../assets/rm_carimg5.png';
import image6 from '../assets/carimg6.png';
import imagerm6 from '../assets/rm_carimg6.png';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import HomePage from '../StripeSub/HomePage';

import popicon from "../assets/popimg.png";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from 'react-redux';

import afterimg from '../assets/after_image.png';
import beforeimg from '../assets/before_image.png';
import logo from "../assets/logo.jpg";

import slider1 from "../assets/s1.png";
import slider2 from "../assets/s2.png";
import slider3 from "../assets/s3.png";
import slider4 from "../assets/s4.png";

import Typography from "@mui/material/Typography";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// the key is located in the .env file
const stripePromise = loadStripe("pk_live_51LdYReIWc2J4BeGZWZb8kFwHtv4VNZls8jLlNIqm1MDWmPUuEgBKb6o1ECDe0iUoAqQCfl7OHg0LvrpcROGwwCTo00HCSMCI1u");
function Home(props) {
  // const ref = useRef(null);  
  // const handleClick = () => {
  //   ref.current?.scrollIntoView({behavior: 'smooth'});
  // };

  const userDataRedux = useSelector((state) => state.status.userLogin?.loggedIn);

  const [open, setOpen] = React.useState(false);
  const [LoginModal, setLoginModal] = React.useState(false);
  const [isPurchase, setIsPurchase] = React.useState(false);


  const userData = JSON.parse(localStorage.getItem("userData"));
  const userPurchase = JSON.parse(localStorage.getItem("subscription"));

  // console.log("userDataRedux", userDataRedux?.is_user_subscribe)


  let purchaseDisable = userData?.is_user_subscribe;

  // console.log(purchaseDisable + " DaTA " + userPurchase)


  React.useEffect(() => {
    // debugger;
    // console.log("userDataRedux-false")
    purchaseDisable = userData?.is_user_subscribe;

    setIsPurchase(userData?.is_user_subscribe)

    //  console.log(isPurchase + " " + purchaseDisable)
  }, [userDataRedux?.is_user_subscribe])

  // console.log(isPurchase + " " + purchaseDisable)
  React.useEffect(() => {

    window.scrollTo(0, 0);
    // let tokenData = userDataRedux?.loggedIn?.token;
    if (userData?.token) {
      axios({
        method: "post",
        url: process.env.REACT_APP_BASE_URL + "api/V1/user/check_subscribe",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${userData?.token}`,
        },
      })
        .then((res) => {
          setIsPurchase(res?.data?.data?.is_user_subscribe)
          res?.data?.data?.is_user_subscribe && setIsPurchase(true)
        }).catch((e) => console.log(e));
    }
  }, [])

  React.useEffect(() => {
    //  console.log("userDataRedux-false")
    setIsPurchase(false)

    console.log(isPurchase + " " + purchaseDisable)
  }, [userDataRedux, isPurchase])



  const handlePurchaseAPI = () => {
    // console.log("Payment Done.")
    setIsPurchase(true)
  }

  // console.log("isPurchase", isPurchase)






  const handlePurchase = () => {
    // console.log(userData && userData?.token)
    // debugger;
    if (userData?.token) {
      setOpen(true)
    } else {
      setLoginModal(true)
    }
    // console.log("userData",userData)
  }

  const handleClose = () => {
    setOpen(false);
    setLoginModal(false)
  }


  // console.log("all", userData);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section id='home'>
      <div className='home_sec'>
        <div className='container-custom'>
          <div className='row'>
            <div className='col-lg-5 col-md-5 my-auto'>
              <div className='lefttitle_blog'>
                <h6>A Complete <svg width="82" height="3" viewBox="0 0 82 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 0H68L65 3H0L3 0Z" fill="#0D1C6D" /><path d="M70 0H75L72 3H67L70 0Z" fill="#0D1C6D" /><path d="M77 0H82L79 3H74L77 0Z" fill="#D62B56" /></svg></h6>
                <h1>Remove background from car image with <img src={logo} alt="picground logo" /></h1>
                <p className='mb-2'>All in one App! Whether you want to add a more professional backdrop from our library, upload your own background or personalise your pictures by adding your logo, PicGround can do it all!</p>
                <p>Access our easy to use background removal AI to make your adverts more professional with a single click. Use our unique powerful photo editor to increase your sales and customer engagement with your adverts</p>
                <h4><b>Unlimited edits for only </b> £ 49.99</h4>
                <Link to="/dashboard">
                  <button className='btn-log_reg mb-0' >Try it now</button>
                </Link>
              </div>
            </div>
            <div className='col-lg-7 col-md-7 my-auto'>
              <div className="mainWrapper">
                <div className="contentWrapper">
                  <div className='parton_flex'>
                    <span>Before</span>
                    <span>After</span>
                  </div>
                  <ReactCompareImage leftImage={afterimg} style={{ width: '100%', height: '200px' }} rightImage={beforeimg} />
                </div>
                <svg width="561" height="40" viewBox="0 0 561 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.98" d="M123.5 0H686V44H97.5L123.5 0Z" fill="#0E153D" /><path d="M76 0H111L84 44H48L76 0Z" fill="#D62B56" /><path d="M28 0H63L36 44H0L28 0Z" fill="#D62B56" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='process_sec'>
        <div className='container'>
          <div className='process_title'>
            <h3>Remove Background in few steps <svg width="82" height="3" viewBox="0 0 82 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 0H68L65 3H0L3 0Z" fill="#0D1C6D" /><path d="M70 0H75L72 3H67L70 0Z" fill="#0D1C6D" /><path d="M77 0H82L79 3H74L77 0Z" fill="#D62B56" /></svg></h3>
            <p>Our system is made to be simple and easy to use and shouldn't take more then a few <br></br> seconds of your time!</p>
          </div>
          <div className='procees_step_blog'>
            <ul>
              <li>
                <div className='process_innerimg'>
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.27919 2.93023C5.77281 2.93023 2.93035 5.77269 2.93035 9.27907V24.1564L8.06261 27.8517C10.4866 29.5969 13.7993 29.4166 16.0194 27.4186L24.0205 20.2174C27.2654 17.2972 32.107 17.0335 35.6498 19.5843L39.07 22.0467V17.093C39.07 16.2839 39.7258 15.6279 40.5351 15.6279C41.3442 15.6279 42.0002 16.2839 42.0002 17.093V24.8904V24.9261V32.7209C42.0002 37.8457 37.8457 42 32.7211 42H9.27919C4.15448 42 0.000117209 37.8457 0.000117209 32.7209V24.9236C-3.90698e-05 24.9117 -3.90698e-05 24.8997 0.000117209 24.8878V9.27907C0.000117209 4.15439 4.15448 0 9.27919 0H24.9072C25.7163 0 26.3723 0.655962 26.3723 1.46512C26.3723 2.27427 25.7163 2.93023 24.9072 2.93023H9.27919ZM2.93035 27.7673V32.7209C2.93035 36.2272 5.77281 39.0698 9.27919 39.0698H32.7211C36.2274 39.0698 39.07 36.2272 39.07 32.7209V25.6575L33.9376 21.9623C31.5137 20.217 28.201 20.3973 25.9808 22.3954L17.9797 29.5965C14.7348 32.5168 9.89319 32.7805 6.35046 30.2296L2.93035 27.7673ZM34.6746 0C35.4838 0 36.1397 0.655962 36.1397 1.46512V5.86047H40.5351C41.3442 5.86047 42.0002 6.51643 42.0002 7.32558C42.0002 8.13474 41.3442 8.7907 40.5351 8.7907H36.1397V13.186C36.1397 13.9952 35.4838 14.6512 34.6746 14.6512C33.8653 14.6512 33.2095 13.9952 33.2095 13.186V8.7907H28.8142C28.0048 8.7907 27.349 8.13474 27.349 7.32558C27.349 6.51643 28.0048 5.86047 28.8142 5.86047H33.2095V1.46512C33.2095 0.655962 33.8653 0 34.6746 0ZM14.1629 10.7442C12.2749 10.7442 10.7443 12.2747 10.7443 14.1628C10.7443 16.0508 12.2749 17.5814 14.1629 17.5814C16.0509 17.5814 17.5816 16.0508 17.5816 14.1628C17.5816 12.2747 16.0509 10.7442 14.1629 10.7442ZM7.81407 14.1628C7.81407 10.6564 10.6565 7.81395 14.1629 7.81395C17.6693 7.81395 20.5118 10.6564 20.5118 14.1628C20.5118 17.6691 17.6693 20.5116 14.1629 20.5116C10.6565 20.5116 7.81407 17.6691 7.81407 14.1628Z" fill="#535353" /></svg>
                </div>
              </li>
              <li>
                <div className='process_innerimg'>
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.6666 16.9573C41.6666 14.0135 39.281 11.6278 36.3372 11.6278H16.9573C14.0135 11.6278 11.6279 14.0135 11.6279 16.9573V36.3371C11.6279 39.2809 14.0135 41.6665 16.9573 41.6665H36.3372C39.281 41.6665 41.6666 39.2809 41.6666 36.3371V16.9573ZM38.7596 16.9573V36.3371C38.7596 37.6743 37.6744 38.7596 36.3372 38.7596H16.9573C15.6201 38.7596 14.5349 37.6743 14.5349 36.3371V16.9573C14.5349 15.6201 15.6201 14.5348 16.9573 14.5348H36.3372C37.6744 14.5348 38.7596 15.6201 38.7596 16.9573Z" fill="#535353" /><path d="M9.68991 24.343L4.12984 29.9031C4.5155 29.9922 4.91666 30.0387 5.32945 30.0387H9.68991V24.343ZM10.2965 14.0465L0 24.343V24.7093C0 26.1511 0.571705 27.4593 1.50194 28.4186L9.68991 20.2306V16.9573C9.68991 15.9225 9.90697 14.936 10.2965 14.0465ZM20.2306 0L0 20.2306V14.6531L14.6531 0H20.2306ZM10.5407 0H5.32945C2.38566 0 0 2.38566 0 5.32945V10.5407L10.5407 0ZM14.0465 10.2965C14.936 9.90697 15.9225 9.68991 16.9573 9.68991H20.2306L28.4186 1.50194C27.4593 0.571705 26.1511 0 24.7093 0H24.343L14.0465 10.2965ZM24.343 9.68991H30.0387V5.32945C30.0387 4.91666 29.9922 4.5155 29.9031 4.12984L24.343 9.68991Z" fill="#535353" /></svg>
                </div>
              </li>
              <li>
                <div className='process_innerimg'>
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 17.5C7.7 17.5 7 16.8 7 15.75C7 8.925 12.425 3.5 19.25 3.5C24.5 3.5 29.225 7 30.975 12.075C31.15 12.95 30.8 14 29.75 14.175C28.875 14.525 27.825 14 27.475 13.125C26.425 9.45 23.1 7 19.25 7C14.35 7 10.5 10.85 10.5 15.75C10.5 16.8 9.8 17.5 8.75 17.5Z" fill="#535353" /><path d="M31.5 31.5C30.45 31.5 29.75 30.8 29.75 29.75C29.75 28.7 30.45 28 31.5 28C35.35 28 38.5 24.85 38.5 21C38.5 17.15 35.35 14 31.5 14C30.975 14 30.275 14 29.75 14.175C28.875 14.35 27.825 13.825 27.65 12.95C27.475 12.075 28 11.025 28.875 10.85C29.75 10.675 30.625 10.5 31.5 10.5C37.275 10.5 42 15.225 42 21C42 26.775 37.275 31.5 31.5 31.5ZM14 31.5H8.75C7.7 31.5 7 30.8 7 29.75C7 28.7 7.7 28 8.75 28H14C15.05 28 15.75 28.7 15.75 29.75C15.75 30.8 15.05 31.5 14 31.5Z" fill="#535353" /><path d="M31.5 31.5H28C26.95 31.5 26.25 30.8 26.25 29.75C26.25 28.7 26.95 28 28 28H31.5C32.55 28 33.25 28.7 33.25 29.75C33.25 30.8 32.55 31.5 31.5 31.5ZM8.75 31.5C3.85 31.5 0 27.65 0 22.75C0 17.85 3.85 14 8.75 14C9.8 14 10.5 14.7 10.5 15.75C10.5 16.8 9.8 17.5 8.75 17.5C5.775 17.5 3.5 19.775 3.5 22.75C3.5 25.725 5.775 28 8.75 28C9.8 28 10.5 28.7 10.5 29.75C10.5 30.8 9.8 31.5 8.75 31.5ZM21 38.5C19.95 38.5 19.25 37.8 19.25 36.75V19.25C19.25 18.2 19.95 17.5 21 17.5C22.05 17.5 22.75 18.2 22.75 19.25V36.75C22.75 37.8 22.05 38.5 21 38.5Z" fill="#535353" /><path d="M15.75 26.25C15.225 26.25 14.875 26.075 14.525 25.725C13.825 25.025 13.825 23.975 14.525 23.275L19.775 18.025C20.475 17.325 21.525 17.325 22.225 18.025C22.925 18.725 22.925 19.775 22.225 20.475L16.975 25.725C16.625 26.075 16.275 26.25 15.75 26.25V26.25Z" fill="#535353" /><path d="M26.25 26.25C25.725 26.25 25.375 26.075 25.025 25.725L19.775 20.475C19.075 19.775 19.075 18.725 19.775 18.025C20.475 17.325 21.525 17.325 22.225 18.025L27.475 23.275C28.175 23.975 28.175 25.025 27.475 25.725C27.125 26.075 26.775 26.25 26.25 26.25V26.25Z" fill="#535353" /></svg>
                </div>
              </li>
              <li>
                <div className='process_innerimg'>
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.0222 3.75978L29.8986 6.88333C24.4995 3.47289 17.5026 3.47289 12.102 6.88333L8.97886 3.75978C16.1541 -1.25326 25.8463 -1.25326 33.0222 3.75978ZM6.88357 12.102C3.47275 17.5011 3.47314 24.499 6.88357 29.8986L3.76002 33.0221C-1.25263 25.8472 -1.2534 16.1528 3.76002 8.97786L6.88357 12.102ZM38.2404 8.97805C43.2542 16.1529 43.253 25.8464 38.2407 33.0223L35.1172 29.8988C38.5272 24.4996 38.5276 17.5018 35.1172 12.1022L38.2404 8.97805ZM33.0217 38.2405C25.8472 43.2532 16.1524 43.2532 8.97839 38.2405L12.1016 35.117C17.5007 38.5274 24.4995 38.5274 29.8982 35.117L33.0217 38.2405Z" fill="#535353" /><path fill-rule="evenodd" clip-rule="evenodd" d="M18.8537 12.8177H23.1463V18.8545H29.1827V23.1468H23.1463V29.1835H18.8537V23.1468H12.8177V18.8545H18.8537V12.8177Z" fill="#535353" /></svg>
                </div>
              </li>
              <li>
                <div className='process_innerimg'>
                  <svg width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M42.9552 34.1512C43.0943 34.2903 43.1725 34.479 43.1725 34.6757C43.1725 34.8724 43.0943 35.0611 42.9552 35.2002L39.8053 38.3502C39.6661 38.4891 39.4774 38.5671 39.2807 38.5671C39.084 38.5671 38.8954 38.4891 38.7561 38.3502L35.606 35.2002C35.4669 35.0611 35.3888 34.8723 35.3888 34.6756C35.3888 34.4788 35.4671 34.2901 35.6062 34.151C35.7454 34.0118 35.9341 33.9337 36.1309 33.9337C36.3277 33.9338 36.5164 34.012 36.6555 34.1512L38.5389 36.0345V30.0737C38.5389 29.877 38.617 29.6883 38.7562 29.5492C38.8953 29.41 39.084 29.3319 39.2807 29.3319C39.4775 29.3319 39.6662 29.41 39.8053 29.5492C39.9444 29.6883 40.0226 29.877 40.0226 30.0737V36.0345L41.9062 34.1512C42.0454 34.0123 42.2341 33.9343 42.4307 33.9343C42.6274 33.9343 42.8161 34.0123 42.9553 34.1512H42.9552ZM46.9383 34.8791C47.1843 32.8483 46.6138 30.8028 45.3521 29.1926C44.0905 27.5823 42.2409 26.539 40.2102 26.2921C39.8966 26.254 39.581 26.2347 39.2651 26.2343C37.7796 26.2373 36.3267 26.669 35.0807 27.4776C33.8346 28.2863 32.8486 29.4375 32.241 30.7929C31.6333 32.1483 31.4299 33.6504 31.6552 35.1186C31.8805 36.5869 32.5249 37.9588 33.511 39.0697C34.4971 40.1806 35.7829 40.9832 37.2141 41.381C38.6452 41.7789 40.1608 41.7551 41.5787 41.3125C42.9967 40.87 44.2567 40.0274 45.2074 38.8861C46.1582 37.7448 46.7592 36.3533 46.9383 34.8787V34.8791ZM6.83591 37.93H30.9863C30.2732 36.4427 29.9731 34.7911 30.1173 33.1481C30.2616 31.505 30.8448 29.9309 31.8061 28.5906C32.7674 27.2503 34.0713 26.1931 35.5813 25.5296C37.0913 24.8661 38.752 24.6208 40.3893 24.8192C40.7038 24.8577 41.0162 24.9119 41.3253 24.9816V19.1395L36.4392 14.2536L26.3046 21.5597L29.326 23.6776C29.4075 23.7328 29.4771 23.8037 29.5309 23.8861C29.5847 23.9685 29.6216 24.0608 29.6394 24.1575C29.6572 24.2543 29.6555 24.3536 29.6346 24.4498C29.6136 24.5459 29.5737 24.6369 29.5172 24.7175C29.4607 24.7981 29.3888 24.8666 29.3056 24.9191C29.2223 24.9716 29.1295 25.007 29.0325 25.0233C28.9354 25.0396 28.8361 25.0364 28.7403 25.0139C28.6445 24.9914 28.5542 24.9501 28.4745 24.8924L13.2479 14.2189L2.49178 23.314C2.48909 23.3162 2.48594 23.3185 2.48325 23.3206V33.5768C2.4844 34.7308 2.94334 35.8373 3.75937 36.6534C4.57539 37.4695 5.68183 37.9285 6.83591 37.9298V37.93ZM6.83591 2.48407H36.9723C38.1262 2.48538 39.2326 2.94436 40.0486 3.76034C40.8646 4.57632 41.3236 5.68266 41.3249 6.83664V17.0418L37.0416 12.7587C36.9171 12.6341 36.7523 12.5579 36.5767 12.5437C36.4011 12.5295 36.2262 12.5783 36.0832 12.6813L25.0183 20.6581L13.6308 12.6756C13.4965 12.5816 13.335 12.5347 13.1713 12.5421C13.0076 12.5496 12.851 12.6109 12.7258 12.7167L2.48371 21.3781V6.83683C2.48504 5.68292 2.94399 4.57666 3.75988 3.76069C4.57578 2.94473 5.68201 2.48568 6.83591 2.48426V2.48407ZM46.5204 28.2778C45.5486 27.0305 44.2696 26.0568 42.8085 25.452V6.83683C42.8067 5.28952 42.1912 3.80612 41.0971 2.71202C40.003 1.61793 38.5196 1.0025 36.9723 1.00073H6.83591C5.28867 1.0026 3.80534 1.61807 2.71129 2.71216C1.61725 3.80624 1.00182 5.28959 1 6.83683L1 33.5771C1.00147 35.1246 1.61684 36.6083 2.71105 37.7025C3.80526 38.7968 5.2889 39.4122 6.83637 39.4137H31.8833C31.935 39.4846 31.9875 39.5542 32.0415 39.6224C33.5513 41.5264 35.7533 42.7555 38.1664 43.0412C40.5794 43.3269 43.0075 42.6461 44.9203 41.1474C46.833 39.6487 48.0749 37.454 48.3747 35.0426C48.6746 32.6313 48.0079 30.1992 46.5204 28.2778V28.2778ZM24.3917 7.75691C25.0643 7.75691 25.7217 7.95636 26.281 8.33002C26.8402 8.70369 27.2761 9.2348 27.5335 9.85618C27.7909 10.4776 27.8582 11.1613 27.727 11.821C27.5958 12.4807 27.2719 13.0866 26.7963 13.5622C26.3208 14.0378 25.7148 14.3617 25.0552 14.4929C24.3955 14.6241 23.7117 14.5568 23.0903 14.2994C22.469 14.042 21.9378 13.6062 21.5642 13.047C21.1905 12.4877 20.991 11.8303 20.991 11.1577C20.9921 10.2561 21.3507 9.39174 21.9882 8.75424C22.6257 8.11673 23.4901 7.75813 24.3917 7.7571V7.75691ZM24.3917 16.0421C23.4256 16.0421 22.4812 15.7556 21.6779 15.2189C20.8746 14.6822 20.2485 13.9193 19.8788 13.0268C19.5091 12.1342 19.4124 11.1521 19.6009 10.2045C19.7893 9.25702 20.2546 8.38667 20.9377 7.70355C21.6208 7.02043 22.4912 6.55522 23.4387 6.36676C24.3862 6.1783 25.3684 6.27505 26.2609 6.64478C27.1535 7.01451 27.9163 7.64061 28.453 8.44389C28.9897 9.24718 29.2762 10.1916 29.2761 11.1577C29.2746 12.4527 28.7595 13.6942 27.8439 14.6098C26.9282 15.5255 25.6866 16.0406 24.3917 16.0421V16.0421Z" fill="#535353" stroke="#535353" stroke-width="1.5" /></svg>
                </div>
              </li>
            </ul>
            <Link to="/dashboard">
              <button className='btn-log_reg mb-0'>Try it now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='plan-sec'>
        <div className='container'>
          <div className='process_title'>
            <h3>Purchase our plan <svg width="82" height="3" viewBox="0 0 82 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 0H68L65 3H0L3 0Z" fill="#0D1C6D" /><path d="M70 0H75L72 3H67L70 0Z" fill="#0D1C6D" /><path d="M77 0H82L79 3H74L77 0Z" fill="#D62B56" /></svg></h3>
            <p>Purchase our plan and get access to our dealer section where you can make unlimited<br></br> uploads for a monthly fee of ONLY 49.99! We don’t like hidden charges and neither do<br></br> our users so we won’t charge you for any extras!</p>
          </div>
          <div className='plan_purchasebox'>
            <div className='left_plansec'>
              <h6>Premium <svg width="62" height="2" viewBox="0 0 62 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="1" x2="61" y2="1" stroke="url(#paint0_linear_21_456)" stroke-width="2" stroke-linecap="round" /><defs><linearGradient id="paint0_linear_21_456" x1="5.86358e-07" y1="2.50769" x2="62" y2="2.50772" gradientUnits="userSpaceOnUse"><stop stop-color="#0D1C6D" /><stop offset="1" stop-color="#D62B56" /></linearGradient></defs></svg></h6>
              <h1>£ 49.99</h1>
              <small>Per Month</small>
            </div>
            <div className='right_plansec'>
              <h3>Get Access to Premium Features</h3>
              <small>Try our unlimited professional background removal for only £ 49.99!</small>
              <ul className='plan_content'>
                <li><svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.44363 9.13679C3.9627 9.13635 3.50262 8.94114 3.16803 8.59557L0.205059 5.62279C0.0735055 5.49079 -0.000223242 5.31173 5.07789e-07 5.12527C0.000448697 4.93881 0.0748539 4.76019 0.207079 4.62865C0.482062 4.35456 0.927153 4.35546 1.20122 4.63044L4.17199 7.61108C4.24572 7.68571 4.34567 7.72874 4.45056 7.73075C4.55298 7.7294 4.64979 7.68436 4.71725 7.60727L11.2863 0.234987C11.5447 -0.0545633 11.9889 -0.0801111 12.2787 0.178287C12.5682 0.43646 12.5938 0.880633 12.3354 1.17042L5.76803 8.54041H5.76825C5.44038 8.90884 4.974 9.12445 4.48077 9.13564C4.468 9.13653 4.45522 9.13653 4.44357 9.13653L4.44363 9.13679Z" fill="green" /></svg><span>large library of professional background</span></li>
                <li><svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.44363 9.13679C3.9627 9.13635 3.50262 8.94114 3.16803 8.59557L0.205059 5.62279C0.0735055 5.49079 -0.000223242 5.31173 5.07789e-07 5.12527C0.000448697 4.93881 0.0748539 4.76019 0.207079 4.62865C0.482062 4.35456 0.927153 4.35546 1.20122 4.63044L4.17199 7.61108C4.24572 7.68571 4.34567 7.72874 4.45056 7.73075C4.55298 7.7294 4.64979 7.68436 4.71725 7.60727L11.2863 0.234987C11.5447 -0.0545633 11.9889 -0.0801111 12.2787 0.178287C12.5682 0.43646 12.5938 0.880633 12.3354 1.17042L5.76803 8.54041H5.76825C5.44038 8.90884 4.974 9.12445 4.48077 9.13564C4.468 9.13653 4.45522 9.13653 4.44357 9.13653L4.44363 9.13679Z" fill="green" /></svg><span>59% increase in engagement</span></li>
                <li><svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.44363 9.13679C3.9627 9.13635 3.50262 8.94114 3.16803 8.59557L0.205059 5.62279C0.0735055 5.49079 -0.000223242 5.31173 5.07789e-07 5.12527C0.000448697 4.93881 0.0748539 4.76019 0.207079 4.62865C0.482062 4.35456 0.927153 4.35546 1.20122 4.63044L4.17199 7.61108C4.24572 7.68571 4.34567 7.72874 4.45056 7.73075C4.55298 7.7294 4.64979 7.68436 4.71725 7.60727L11.2863 0.234987C11.5447 -0.0545633 11.9889 -0.0801111 12.2787 0.178287C12.5682 0.43646 12.5938 0.880633 12.3354 1.17042L5.76803 8.54041H5.76825C5.44038 8.90884 4.974 9.12445 4.48077 9.13564C4.468 9.13653 4.45522 9.13653 4.44357 9.13653L4.44363 9.13679Z" fill="green" /></svg><span>cheapest solution online</span></li>
                <li><svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.44363 9.13679C3.9627 9.13635 3.50262 8.94114 3.16803 8.59557L0.205059 5.62279C0.0735055 5.49079 -0.000223242 5.31173 5.07789e-07 5.12527C0.000448697 4.93881 0.0748539 4.76019 0.207079 4.62865C0.482062 4.35456 0.927153 4.35546 1.20122 4.63044L4.17199 7.61108C4.24572 7.68571 4.34567 7.72874 4.45056 7.73075C4.55298 7.7294 4.64979 7.68436 4.71725 7.60727L11.2863 0.234987C11.5447 -0.0545633 11.9889 -0.0801111 12.2787 0.178287C12.5682 0.43646 12.5938 0.880633 12.3354 1.17042L5.76803 8.54041H5.76825C5.44038 8.90884 4.974 9.12445 4.48077 9.13564C4.468 9.13653 4.45522 9.13653 4.44357 9.13653L4.44363 9.13679Z" fill="green" /></svg><span>Unlimited edits</span></li>
                <li><svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.44363 9.13679C3.9627 9.13635 3.50262 8.94114 3.16803 8.59557L0.205059 5.62279C0.0735055 5.49079 -0.000223242 5.31173 5.07789e-07 5.12527C0.000448697 4.93881 0.0748539 4.76019 0.207079 4.62865C0.482062 4.35456 0.927153 4.35546 1.20122 4.63044L4.17199 7.61108C4.24572 7.68571 4.34567 7.72874 4.45056 7.73075C4.55298 7.7294 4.64979 7.68436 4.71725 7.60727L11.2863 0.234987C11.5447 -0.0545633 11.9889 -0.0801111 12.2787 0.178287C12.5682 0.43646 12.5938 0.880633 12.3354 1.17042L5.76803 8.54041H5.76825C5.44038 8.90884 4.974 9.12445 4.48077 9.13564C4.468 9.13653 4.45522 9.13653 4.44357 9.13653L4.44363 9.13679Z" fill="green" /></svg><span>Add your own background and logo</span></li>
              </ul>
            </div>
          </div>
          {/* <Link to="/dashboard"> */}
          <button className='btn-log_reg mb-0' disabled={userDataRedux?.is_user_subscribe} onClick={handlePurchase}>Purchase</button>
          {/* </Link> */}
        </div>
      </div>
      <div className='service-sec'>
        <div className='container'>
          <div className='process_title'>
            <h3>Our Services<svg width="82" height="3" viewBox="0 0 82 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 0H68L65 3H0L3 0Z" fill="#0D1C6D" /><path d="M70 0H75L72 3H67L70 0Z" fill="#0D1C6D" /><path d="M77 0H82L79 3H74L77 0Z" fill="#D62B56" /></svg></h3>
            <p>Whether you just want to remove the background and add a more professional<br></br> backdrop from our library, upload your own background or personalise your pictures by<br></br> adding your logo, PicGround can do it all!</p>
          </div>
        </div>
        <div className='service_slideblog'>
          <svg width="192" height="17" viewBox="0 0 192 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.84 0.199999H20.712C21.096 0.199999 21.448 0.279999 21.768 0.439999C22.104 0.599999 22.384 0.823999 22.608 1.112C22.832 1.384 22.992 1.696 23.088 2.048C23.2 2.4 23.216 2.768 23.136 3.152L21.768 9.992C21.64 10.664 21.312 11.208 20.784 11.624C20.272 12.04 19.68 12.248 19.008 12.248H6.744L5.808 17H0.48L3.84 0.199999ZM8.208 4.952L7.536 8.312H16.608C16.88 8.312 17.056 8.168 17.136 7.88L17.76 4.784C17.792 4.608 17.752 4.456 17.64 4.328C17.528 4.184 17.384 4.112 17.208 4.112H5.4L8.208 4.952ZM24.1519 17L27.5119 0.199999H32.5519L29.1919 17H24.1519ZM39.4794 13.088H45.4794C45.7994 13.088 45.9834 12.936 46.0314 12.632L46.2954 11.408H51.3354L50.6634 14.744C50.5354 15.416 50.2074 15.96 49.6794 16.376C49.1674 16.792 48.5754 17 47.9034 17H35.9754C35.5914 17 35.2314 16.92 34.8954 16.76C34.5594 16.6 34.2794 16.384 34.0554 16.112C33.8314 15.824 33.6714 15.504 33.5754 15.152C33.4794 14.8 33.4714 14.432 33.5514 14.048L35.8794 2.456C36.0074 1.784 36.3274 1.24 36.8394 0.823999C37.3514 0.407999 37.9434 0.199999 38.6154 0.199999H50.2554C50.7034 0.199999 51.1114 0.295999 51.4794 0.487999C51.8634 0.663999 52.1754 0.911999 52.4154 1.232C52.6714 1.536 52.8554 1.888 52.9674 2.288C53.0794 2.688 53.0954 3.104 53.0154 3.536L52.5594 5.792H47.5194L47.7354 4.784C47.7674 4.608 47.7274 4.456 47.6154 4.328C47.5034 4.184 47.3594 4.112 47.1834 4.112H41.0394C40.7514 4.112 40.5674 4.264 40.4874 4.568L38.9274 12.416C38.8954 12.592 38.9354 12.752 39.0474 12.896C39.1594 13.024 39.3034 13.088 39.4794 13.088ZM66.9701 4.952L65.4821 12.416C65.4501 12.592 65.4901 12.752 65.6021 12.896C65.7141 13.024 65.8581 13.088 66.0341 13.088H72.0341C72.3541 13.088 72.5381 12.936 72.5861 12.632L73.0661 10.28H70.9781C70.7061 10.28 70.4581 10.224 70.2341 10.112C70.0101 10 69.8181 9.856 69.6581 9.68C69.5141 9.488 69.4101 9.272 69.3461 9.032C69.2821 8.776 69.2741 8.52 69.3221 8.264L69.5861 6.92H78.7781L77.4821 13.4C77.3701 13.928 77.1781 14.416 76.9061 14.864C76.6341 15.296 76.3061 15.672 75.9221 15.992C75.5381 16.312 75.0981 16.56 74.6021 16.736C74.1221 16.912 73.6181 17 73.0901 17H62.5301C62.1461 17 61.7861 16.92 61.4501 16.76C61.1141 16.6 60.8341 16.384 60.6101 16.112C60.3861 15.824 60.2261 15.504 60.1301 15.152C60.0341 14.8 60.0261 14.432 60.1061 14.048L62.4341 2.456C62.5621 1.784 62.8821 1.24 63.3941 0.823999C63.9061 0.407999 64.4981 0.199999 65.1701 0.199999H79.6661L78.8981 4.112H64.1621L66.9701 4.952ZM92.8037 12.248H86.6597L85.6997 17H80.6597L84.0197 0.199999H100.196C100.644 0.199999 101.052 0.295999 101.42 0.487999C101.804 0.663999 102.116 0.911999 102.356 1.232C102.612 1.536 102.796 1.888 102.908 2.288C103.02 2.688 103.036 3.104 102.956 3.536L101.66 9.992C101.532 10.664 101.212 11.208 100.7 11.624C100.188 12.04 99.5957 12.248 98.9237 12.248H97.8437L99.9797 17H94.9397L92.8037 12.248ZM87.4277 8.312H96.4997C96.7877 8.312 96.9717 8.168 97.0517 7.88L97.6517 4.784C97.6837 4.608 97.6437 4.456 97.5317 4.328C97.4357 4.184 97.2997 4.112 97.1237 4.112H88.2677L87.4277 8.312ZM121.74 14.744C121.612 15.416 121.284 15.96 120.756 16.376C120.244 16.792 119.652 17 118.98 17H106.788C106.34 17 105.924 16.912 105.54 16.736C105.172 16.544 104.86 16.296 104.604 15.992C104.364 15.672 104.188 15.312 104.076 14.912C103.964 14.496 103.948 14.072 104.028 13.64L106.284 2.456C106.412 1.784 106.732 1.24 107.244 0.823999C107.756 0.407999 108.348 0.199999 109.02 0.199999H121.236C121.668 0.199999 122.068 0.295999 122.436 0.487999C122.82 0.663999 123.14 0.911999 123.396 1.232C123.652 1.536 123.836 1.888 123.948 2.288C124.06 2.688 124.068 3.104 123.972 3.536L121.74 14.744ZM109.884 13.088H116.58C116.884 13.088 117.068 12.936 117.132 12.632L118.692 4.784C118.724 4.608 118.684 4.456 118.572 4.328C118.46 4.184 118.316 4.112 118.14 4.112H111.444C111.156 4.112 110.972 4.264 110.892 4.568L109.332 12.416C109.3 12.592 109.34 12.752 109.452 12.896C109.564 13.024 109.708 13.088 109.884 13.088ZM127.811 17C127.363 17 126.947 16.912 126.563 16.736C126.195 16.544 125.883 16.296 125.627 15.992C125.387 15.672 125.211 15.312 125.099 14.912C124.987 14.496 124.971 14.072 125.051 13.64L127.739 0.199999H132.779L130.355 12.416C130.323 12.592 130.363 12.752 130.475 12.896C130.587 13.024 130.731 13.088 130.907 13.088H137.027C137.315 13.088 137.499 12.936 137.579 12.632L140.075 0.199999H145.115L142.211 14.744C142.083 15.416 141.755 15.96 141.227 16.376C140.715 16.792 140.123 17 139.451 17H127.811ZM153.778 3.704L151.114 17H146.074L149.434 0.199999H158.122L160.786 13.496L163.426 0.199999H168.466L165.106 17H156.442L153.778 3.704ZM184.921 17H169.441L172.801 0.199999H188.977C189.425 0.199999 189.833 0.295999 190.201 0.487999C190.585 0.663999 190.897 0.911999 191.137 1.232C191.393 1.536 191.577 1.888 191.689 2.288C191.801 2.688 191.817 3.104 191.737 3.536L189.841 12.944C189.729 13.536 189.521 14.08 189.217 14.576C188.913 15.072 188.545 15.504 188.113 15.872C187.681 16.224 187.193 16.504 186.649 16.712C186.105 16.904 185.529 17 184.921 17ZM184.321 13.088C184.609 13.088 184.793 12.936 184.873 12.632L186.433 4.784C186.465 4.608 186.425 4.456 186.313 4.328C186.217 4.184 186.081 4.112 185.905 4.112H177.049L175.273 13.088H184.321Z" fill="#D62B56" /></svg>
          <div class="slider-blog">
            <div className='container'>
              <Carousel responsive={responsive}>
                <div>
                  <img src={slider1} alt="slider" />
                </div>
                <div>
                  <img src={slider2} alt="slider" />
                </div>
                <div>
                  <img src={slider3} alt="slider" />
                </div>
                <div>
                  <img src={slider4} alt="slider" />
                </div>
                <div>
                  <img src={slider1} alt="slider" />
                </div>
                <div>
                  <img src={slider2} alt="slider" />
                </div>
                <div>
                  <img src={slider3} alt="slider" />
                </div>
                <div>
                  <img src={slider4} alt="slider" />
                </div>
              </Carousel>
            </div>
          </div>
          {userDataRedux?.token === undefined && <Link to="/login">
            <button className='btn-log_reg mb-0'>Sign in</button>
          </Link>}
          <Modal
            className="modal-remove_bg"
            open={LoginModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <a href="#" className="dismiss-icon" onClick={handleClose}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6584 0.164062L6.00008 4.8224L1.34175 0.164062L0.166748 1.33906L4.82508 5.9974L0.166748 10.6557L1.34175 11.8307L6.00008 7.1724L10.6584 11.8307L11.8334 10.6557L7.17508 5.9974L11.8334 1.33906L10.6584 0.164062Z"
                    fill="#ffffff"
                  />
                </svg>
              </a>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <img src={popicon} alt="images" className="modal-image" />
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Please Login / Register yourself and buy the monthly
                subscription plan to download the edited image.
              </Typography>
              <div className="button-grp">
                <Link to="/login">
                  <button type="submit" className="btn-log_reg me-2">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button type="submit" className="btn-log_reg">
                    Register
                  </button>
                </Link>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
      <Modal
        className="modal-remove_bg"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
          <Elements stripe={stripePromise}>
            <HomePage handleClose={handleClose} purchaseHandler={handlePurchaseAPI} />
          </Elements>
        </Box>
      </Modal>

    </section >
  )

}


export default Home
