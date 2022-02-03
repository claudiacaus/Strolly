import { Router } from "express";
import { createPaymentIntent, getCustomer } from "../controllers/payments.js";

const paymentsRouter = Router();

paymentsRouter.get("/getCustomer/:customerId", getCustomer);
paymentsRouter.get("/createPaymentIntent/:customerId", createPaymentIntent);

export default paymentsRouter;
