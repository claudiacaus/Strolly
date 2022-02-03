/* eslint-disable no-console */
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const { connection } = mongoose;
import { seedOrders } from "./seedOrders.js";
try {
  const uri = process.env.MONGODB_URL;
  mongoose.connect(uri);

  const ordersCollection = connection.collection("orders");
  if (ordersCollection) await ordersCollection.drop();

  await seedOrders();
  console.log("Orders seeded successfully");
} catch (error) {
  console.log(error);
} finally {
  mongoose.disconnect();
}
