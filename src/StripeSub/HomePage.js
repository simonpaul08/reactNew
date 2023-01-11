import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import popicon from "../assets/popimg.png";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { setAuthStatus } from "../features/removeBackground";

export default function HomePage(props) {
  // collect data from the user
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [priceId, setPriceId] = useState(49.99);
  const [card, setCard] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [Spinner, setSpinner] = useState(false);
  const [subError, setSubError] = useState();

  const userData = JSON.parse(localStorage.getItem("userData"));

  const status = useSelector((state) => state.status.userLogin);
  const dispatch = useDispatch();

  // console.log("sttatusd", status);

  // stripe items
  const stripe = useStripe();
  const elements = useElements();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const result = userData && userData?.email?.split("@")[0];

  // console.log("CardElement", elements?.getElement(CardElement))
  // console.log(result);

  // main function
  // debugger;

  // console.log("all", userData);
  const createSubscription = async (event) => {
    event.preventDefault();
    setSpinner(true);
    try {
      // create a payment method
      const paymentMethod = await stripe?.createPaymentMethod({
        type: "card",
        card: elements?.getElement(CardElement),
      });

      // call the backend to create subscription
      // const response = await fetch("http://localhost:5000/create-subscription", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   data: JSON.stringify({
      //     paymentMethod: paymentMethod?.paymentMethod?.id,
      //     name,
      //     email,
      //     priceId
      //   }),
      // }).then((res) => res.json());

      //http://13.233.83.100:5000/


      // console.log("paymentMethod", paymentMethod)
      // debugger;

      const responseTest = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_URL + "api/V1/create_stripe_subscription",
        // url: "https://hexeros.com/dev/pic-ground-api/api/V1/create_stripe_subscription",
        // url: "http://localhost:5000/create-subscription",
        // baseURL: 'http://13.233.83.100:5000/',
        // url: 'create-subscription',
        data: {
          payment_method: paymentMethod?.paymentMethod?.id,
          name: userData?.email,
          email: userData?.email,
          product_name: "PicGround Subscription",
          unit_amount: priceId,
          currency: "usd",
        },
      })
        .then((res) => res.data)
        .catch((e) => setSubError(e));

      // if (responseTest === undefined) {
      //   alert("Something went wrong with your card details or network")
      // }

      console.log("error", responseTest)


      if (paymentMethod.error) {
        alert(paymentMethod.error.message)
      }
      // console.log("responseTest", responseTest?.data?.message ? responseTest?.data?.message : responseTest)
      const confirmPayment = await stripe?.confirmCardPayment(
        responseTest?.data?.clientSecret,
        {
          payment_method: {
            card: elements?.getElement(CardElement),
            billing_details: {
              name: userData?.email,
            },
          },
        }
      );

      // console.log("confirmPayment", confirmPayment);

      setSpinner(false);
      if (responseTest?.message !== "Error") {
        if (confirmPayment?.error) {
          alert(confirmPayment.error.message);
        } else {
          props?.handleClose();
          props?.purchaseHandler();
          alert("Success! Check your email for the invoice.");

          let updatedLocalstorage = { ...userData, is_user_subscribe: true };
          dispatch(setAuthStatus(updatedLocalstorage));
          // console.log("updatedLocalstorage",updatedLocalstorage)

          // let updatedLocalstorage = { ...userData, is_user_subscribe: true }

          localStorage.setItem("subscription", true);

          // console.log("updatedLocalstorage", updatedLocalstorage)

          await axios({
            method: "post",
            url: process.env.REACT_APP_BASE_URL + "api/V1/stripe_payment",
            data: {
              email: userData ? userData.email : "",
              paymentId: confirmPayment?.paymentIntent?.id,
            },
          })
            .then((res) => {
              // console.log("ResConfirm", res);
            })
            .catch((e) => console.log(e));
        }
      }
    } catch (error) {
      console.log(error);

      setSpinner(false);
    }
  };

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

  // console.log("card", card)

  return (
    // <div className="" style={{ marginTop: 90, display: 'flex', justifyContent: 'center', flexDirection: 'column', width: "40%" }}>
    //   {/* <input  // this should not be a text field. maybe a radio button ro something
    //     placeholder="Price Id"
    //     type="text"
    //     value={name}
    //     onChange={(e) => setPriceId(e.target.value)}
    //   /> */}
    //   <input
    //     placeholder="Name"
    //     type="text"
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //   />
    //   <br />
    //   <input
    //     placeholder="Email"
    //     type="text"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <div style={{ width: "100%" }}>
    //     <CardElement onReady={el => setCard(el)} />
    //   </div>

    //   <button onClick={createSubscription} disabled={!stripe}>
    //     Subscribe
    //   </button>
    // </div>

    <main className="logreg_main">
      <div className="container">
        <div className="login-reg_blog">
          <h1 style={{ marginBottom: 25 }}>Premium Subscription</h1>

          <Modal
            className="modal-remove_bg"
            open={open}
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

          <form>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <h5>
                  £ 49.99 /<span>Per Month</span>
                </h5>
              </div>
            </div>

            <h6 style={{ textAlign: "left", marginTop: 40 }}>
              Payment Informtaion
            </h6>
            <div style={{ width: "100%" }}>
              <CardElement
                onReady={(el) => setCard(el)}
                options={{ hidePostalCode: true }}
              />
            </div>
            {Spinner ? (
              <div style={{ marginTop: 10 }}>
                <CircularProgress color="secondary" />
              </div>
            ) : (
              <div>
                <button
                  type="submit"
                  onClick={createSubscription}
                  disabled={!stripe}
                  className="btn-log_reg me-0 mt-3"
                >
                  Subscribe
                </button>
                <h6
                  style={{ marginTop: 13, cursor: "pointer" }}
                  onClick={props?.handleClose}
                >
                  Cancel
                </h6>
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
