import React from 'react';
// Components
import HomePage from './HomePage';
// Styles
import '../index.css';
// Stripe Imports
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// the key is located in the .env file
const stripePromise = loadStripe("pk_live_51LdYReIWc2J4BeGZWZb8kFwHtv4VNZls8jLlNIqm1MDWmPUuEgBKb6o1ECDe0iUoAqQCfl7OHg0LvrpcROGwwCTo00HCSMCI1u");

// const stripePromise = loadStripe("pk_test_51MEB1TSGiBg12eiMlMGeJEoK9r71ATHtxplY6jjXCKIpjc0kk3aK1sSY5lzjhdKR9UpJXrC3L9III3zTHoFZMd9E006nCpEciL");

function App() {
  return (
    <Elements stripe={stripePromise}>
      <HomePage />
    </Elements>
  );
}

export default App;
