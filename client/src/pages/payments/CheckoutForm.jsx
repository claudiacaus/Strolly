import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import "../../styles/Payments.css";
import Error from "../../components/Error";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Spinner from "../../components/Spinner";
import propTypes from "prop-types";

const CheckoutForm = ({ userId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success/${userId}`,
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (e.g., payment
      // details incomplete)
      setErrorMessage(error.message);
      setIsLoading(false);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <>
      {/* Show error message to your customers */}
      <form onSubmit={handleSubmit} className="payment-form">
        {errorMessage && <Error errorTxt={errorMessage} />}
        <PaymentElement />
        <PrimaryButton width="100%" text="Submit" />
        {isLoading && <Spinner />}
      </form>
    </>
  );
};

CheckoutForm.propTypes = {
  userId: propTypes.string,
};
export default CheckoutForm;
