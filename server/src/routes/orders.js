import express from "express";
import {
  getAllOrders,
  lockStroller,
  createOrder,
  unlockStroller,
  cancelReservation,
  getOrderById,
} from "../controllers/orders.js";

const ordersRouter = express.Router();

ordersRouter.get("/", getAllOrders);
ordersRouter.get("/getOneOrder/:orderId", getOrderById);
ordersRouter.post("/createOrder/:userId", createOrder);
ordersRouter.put("/cancel/:orderId", cancelReservation);
ordersRouter.put("/unlock/:orderId", unlockStroller);
ordersRouter.put("/lock", lockStroller);

export default ordersRouter;
