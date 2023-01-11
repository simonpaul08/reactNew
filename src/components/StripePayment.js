import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  PaymentRequestButtonElement,
  IbanElement,
  IdealBankElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe";

const handleBlur = () => {
  console.log("[blur]");
};
const handleChange = (change) => {
  console.log("[change]", change);
};
const handleClick = () => {
  console.log("[click]");
};
const handleFocus = () => {
  console.log("[focus]");
};
const handleReady = () => {
  console.log("[ready]");
};

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: "#424770",
        letterSpacing: "0.025em",
        fontFamily: "Source Code Pro, monospace",
        "::placeholder": {
          color: "#aab7c4",
        },
        padding,
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };
};

const CardForm = ({ fontSize }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log("[PaymentMethod]", payload);
  };

  return (
    <form onSubmit={handleSubmit} className="DemoWrapper">
      <h2>CardElement</h2>
      <label>
        Card details
        <CardElement
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          onReady={handleReady}
          options={createOptions(fontSize)}
        />
      </label>
      <button>Pay</button>
    </form>
  );
};

const stripe = window.Stripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const StripePayment = () => {
  const getElementFontSize = () => (window.innerWidth < 450 ? "14px" : "18px");
  const [elementFontSize, setElementFontSize] = useState(getElementFontSize);

  useEffect(() => {
    const onResize = () => {
      setElementFontSize(getElementFontSize());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return (
    <div className="Checkout">
      <Elements stripe={stripe}>
        <CardForm fontSize={elementFontSize} />
      </Elements>
    </div>
  );
};
