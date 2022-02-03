import mongoose from "mongoose";
import { logError } from "../util/logging.js";
import Strollers from "./Strollers.js";
import Users from "./Users.js";

const { Schema } = mongoose;
const EXPIRY_TIME = 1000 * 60 * 15;
const ordersSchema = new Schema({
  // write schema here
  userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
  strollerType: { type: String, required: true },
  strollerTypeId: { type: String, required: true },
  strollerId: { type: Schema.Types.ObjectId, ref: "strollers", required: true },
  price: { type: Number, required: true },
  reservationTime: Number,
  startTime: Number,
  endTime: Number,
  startLocationId: String,
  startLocation: String,
  endLocation: String,
  totalUsage: Number,
  paymentMethod: { type: String, default: "card" },
  cost: Number,
  confirmed: { type: Boolean, default: false },
  completed: { type: Boolean, default: false },
});
ordersSchema.pre("save", async function (next) {
  const strollerId = this.strollerId;
  const userId = this.userId;
  const replicaOrder = this; //it refers the current order object which is saved in the db
  if (this.isModified("reservationTime")) {
    //if the reservationTime is changed, it means we have new order
    setTimeout(async function () {
      //setTimer
      try {
        //we need the order
        const order = await Orders.findById(replicaOrder._id);
        //if the user did not unlock the stroller
        if (!order?.confirmed && !order?.completed) {
          await Strollers.findByIdAndUpdate(strollerId, {
            available: true,
          });

          await Users.findByIdAndUpdate(userId, {
            activeOrder: null,
          });
          //if the user did not cancel it in 15 min
          order.completed = true;
          order.save();
          // eslint-disable-next-line no-console
          console.log(`${userId}'s order ${order._id} is canceled!`);
        }
      } catch (err) {
        logError(err);
      }
    }, EXPIRY_TIME);
  }
  next();
});
const Orders = mongoose.model("orders", ordersSchema);

export default Orders;
