import Users from "../models/Users.js";
import { logError } from "../util/logging.js";
import ErrorResponse from "../util/errorResponse.js";
import Orders from "../models/Orders.js";
import Strollers from "../models/Strollers.js";
import StrollyCenters from "../models/StrollyCenters.js";
import Stripe from "stripe";

//! change this key to the live key in production environment
const stripe = new Stripe(
  // eslint-disable-next-line prettier/prettier
  "sk_test_51K9D90KxEN1n8FpgJHQIvSvrtTt1FISz1c1iLWnHWK0yArk8ZTYU1yxJfor7G0Sp4HvGEhOD8Q6Qw1REBZm4N7zb00bePXgods"
);

// this file will have functions to handle orders
export const lockStroller = async (req, res, next) => {
  try {
    const { lockForm } = req.body;

    if (typeof lockForm !== "object") {
      return next(
        // eslint-disable-next-line prettier/prettier
        new ErrorResponse("You need to provide a 'lockForm' object", 400)
      );
    }

    const alreadyExistOrder = await Orders.findOne({ _id: lockForm?.orderId });

    if (!alreadyExistOrder)
      return next(new ErrorResponse("Order is not found!", 404));

    const alreadyExistStroller = await Strollers.findOne({
      _id: lockForm?.strollerId,
    });
    if (!alreadyExistStroller)
      return next(new ErrorResponse("Stroller is not found!", 404));

    const alreadyExistUser = await Users.findOne({ _id: lockForm?.userId });
    if (!alreadyExistUser)
      return next(new ErrorResponse("User is not found!", 404));

    const alreadyExistLocation = await StrollyCenters.findOne({
      _id: lockForm?.locationId,
    });
    if (!alreadyExistLocation)
      return next(new ErrorResponse("Location is not found!", 404));
    //In order table
    //completed true
    //endTime
    //cost
    alreadyExistOrder.completed = true;
    alreadyExistOrder.endLocation = lockForm.endLocation;
    alreadyExistOrder.endTime = new Date().getTime();
    const totalUsage = alreadyExistOrder.endTime - alreadyExistOrder.startTime;
    const totalUsageMinutes = totalUsage / (1000 * 60);

    //give the user one minute in case he unlock the stroller by mistake
    if (totalUsageMinutes < 1 / 6) {
      alreadyExistOrder.cost = 0;
      alreadyExistOrder.totalUsage = 0;
    } else {
      alreadyExistOrder.totalUsage = totalUsageMinutes;
      const totalCost = totalUsageMinutes * alreadyExistOrder.price;
      alreadyExistOrder.cost = totalCost >= 0.5 ? totalCost : 0.5;
    }

    //In Strollers
    //set location to the selectedLocation
    //set availability of the stroller
    alreadyExistStroller.location = lockForm.locationId;
    alreadyExistStroller.available = true;

    alreadyExistUser.activeOrder = null;

    // charge the user with the total cost
    if (alreadyExistOrder.cost >= 0.5) {
      const paymentMethods = await stripe.paymentMethods.list({
        customer: lockForm?.userId,
        type: "card",
      });

      await stripe.paymentIntents.create({
        // we should multiple the cost by 100 because the unite is cents in strip platform
        amount: parseInt(alreadyExistOrder.cost * 100, 10),
        currency: "eur",
        customer: lockForm?.userId,
        payment_method: paymentMethods.data[0].id,
        off_session: true,
        confirm: true,
      });
    }
    alreadyExistOrder.save();
    alreadyExistStroller.save();
    alreadyExistUser.save();

    res.status(201).json({
      success: true,
      result: alreadyExistUser,
      orderId: alreadyExistOrder._id,
    });
  } catch (error) {
    logError(error);
    res.status(400).json({ success: false, msg: `Error: ${error.message}` });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const allOrders = await Orders.find({});
    res.status(200).json({
      success: true,
      result: allOrders,
    });
  } catch (error) {
    logError(error);
    res.status(400).json({ success: false, msg: `Error: ${error.message}` });
  }
};

export const getOrderById = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const order = await Orders.findById(orderId);

    if (!order) return next(new ErrorResponse("Order is not found!", 404));
    res.status(200).json({
      success: true,
      result: order,
    });
  } catch (error) {
    logError(error);
    res.status(400).json({ success: false, msg: `Error: ${error.message}` });
  }
};

// this function will create a new order
export const createOrder = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const { order } = req.body;

    if (typeof order !== "object") {
      return next(
        // eslint-disable-next-line prettier/prettier
        new ErrorResponse("You need to provide a 'orderForm' object", 400)
      );
    }

    const newOrder = await Orders.create({ userId, ...order });
    await Users.findByIdAndUpdate(userId, {
      activeOrder: {
        strollerType: newOrder.strollerTypeId,
        order: newOrder._id,
      },
    });
    const userAfterUpdate = await Users.findById(userId)
      .populate({
        path: "activeOrder",
        populate: { path: "strollerType" },
      })
      .populate({
        path: "activeOrder",
        populate: { path: "order" },
      });
    //Change stroller available to false
    await Strollers.findByIdAndUpdate(newOrder.strollerId, {
      available: false,
    });

    res.status(201).json({ success: true, result: userAfterUpdate });
  } catch (error) {
    logError(error);
    res.status(400).json({ success: false, msg: `Error: ${error.message}` });
  }
};

export const unlockStroller = async (req, res) => {
  const { orderId } = req.params;
  const { confirmed, startTime } = req.body;

  try {
    const activeOrder = await Orders.findByIdAndUpdate(orderId, {
      confirmed,
      startTime,
    });

    const userAfterUpdate = await Users.findById(activeOrder.userId)
      .populate({
        path: "activeOrder",
        populate: { path: "strollerType" },
      })
      .populate({
        path: "activeOrder",
        populate: { path: "order" },
      });
    res.status(200).json({
      success: true,
      result: userAfterUpdate,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    logError(error);
    res.status(400).json({ success: false, msg: `Error: ${error.message}` });
  }
};

//this function will update the order status using the 15 minutes countdown timer in the frontend.
//If the user does not confirm the order within 15 minutes, the order will be canceled.And the stroller will be available again.
// if he cancels the reservation, the stroller will be available again.

export const cancelReservation = async (req, res, next) => {
  const { orderId } = req.params;
  const { userId, strollerId } = req.body;
  try {
    const order = await Orders.findByIdAndUpdate(orderId, {
      completed: true,
    });

    if (!order) return next(new ErrorResponse("Order is not found!", 404));

    await Strollers.findByIdAndUpdate(strollerId, {
      available: true,
    });
    await Users.findByIdAndUpdate(userId, {
      activeOrder: null,
    });

    const userAfterUpdate = await Users.findById(userId);
    res.status(200).json({
      success: true,
      result: userAfterUpdate,
    });
  } catch (error) {
    logError(error);
    res.status(400).json({ success: false, msg: `Error: ${error.message}` });
  }
};
