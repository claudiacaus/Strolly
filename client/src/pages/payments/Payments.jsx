import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import ShowSpinnerOrErrors from "../../components/ShowSpinnerOrErrors";

//* Make sure to call `loadStripe` outside of a component’s render to avoid
//* recreating the `Stripe` object on every render.
//! change this key to the live key in production environment

const stripePromise = loadStripe(
  "pk_test_51K9D90KxEN1n8FpgLH4pkoJoN08Hs2OjHJiJyuxH7zt0sW4cHy9ljZvT8YSUSfYJWLppCDkXA2EkVVYlA8xTOUWm00zE6qPY0p"
);

function Payments() {
  const [clientKey, setClientKey] = useState(null);
  const { userId } = useParams();
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    `/payments/createPaymentIntent/${userId}`,
    (response) => {
      setClientKey(response.client_secret);
    }
  );
  useEffect(() => {
    performFetch();

    return cancelFetch;
  }, []);

  const options = {
    // passing the client secret obtained in step 2
    clientSecret: clientKey,
    // Fully customizable with appearance API.
    appearance: {
      theme: "stripe",
      labels: "floating",
    },
  };

  return (
    <>
      <div className="page-container">
        <div className="page-content-container">
          <ShowSpinnerOrErrors
            isLoading={isLoading}
            error={error ? true : false}
            errorTxt="Error happened please try again later"
          />
          {clientKey && !isLoading && !error && (
            <>
              <h2 style={{ textAlign: "center" }}>
                Please fill the payment info to activate your account
              </h2>
              <div className="payment-form-container">
                <Elements stripe={stripePromise} options={options}>
                  <CheckoutForm userId={userId} />
                </Elements>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Payments;
