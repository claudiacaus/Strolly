// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
import { logError } from "../util/logging.js";
import Stripe from "stripe";

//! change this key to the live key in production environment
const stripe = new Stripe(
  "sk_test_51K9D90KxEN1n8FpgJHQIvSvrtTt1FISz1c1iLWnHWK0yArk8ZTYU1yxJfor7G0Sp4HvGEhOD8Q6Qw1REBZm4N7zb00bePXgods"
);

//get the customer Object by customer id .. I think we don't need it till now
export const getCustomer = async (req, res) => {
  const { customerId } = req.params;
  try {
    const customer = await stripe.customers.retrieve(customerId);

    res.status(200).json({
      success: true,
      result: customer,
    });
  } catch (error) {
    logError(error);
    res.status(400).json({ success: false, msg: `Error: ${error.message}` });
  }
};

//this to control and save the user card information when he make the first purchase step 4 => https://stripe.com/docs/payments/save-during-payment?html-or-react=react#web-create-payment-intent
export const createPaymentIntent = async (req, res) => {
  const { customerId } = req.params;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      customer: customerId,
      setup_future_usage: "off_session",
      amount: 50,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.status(200).json({
      success: true,
      result: `Payment Intent has been created successfully for customer ${paymentIntent.customer}`,
      client_secret: paymentIntent.client_secret,
    });
  } catch (error) {
    logError(error);
    res
      .status(400)
      .json({ success: false, msg: `Error happened: ${error.message}` });
  }
};
