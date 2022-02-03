/* eslint-disable no-console */
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { seedfeatures } from "./seedFeatures.js";
import { seedstrollers } from "./seedStrollers.js";
import { seedStrollerTypes } from "./seedStrollerTypes.js";
import { seedStrollyCenters } from "./seedStrollyCenters.js";
try {
  const uri = process.env.MONGODB_URL;
  mongoose.connect(uri);
  await mongoose.createConnection(uri).dropDatabase();

  await seedfeatures();
  console.log("Features seeded successfully");
  await seedStrollyCenters();
  console.log("Strolly centers seeded successfully");
  await seedStrollerTypes();
  console.log("Stroller Types seeded successfully");
  await seedstrollers();
  console.log("Strollers seeded successfully");
} catch (error) {
  console.log(error);
} finally {
  mongoose.disconnect();
}
