import mongoose from "mongoose";
const { Schema } = mongoose;

const strollersSchema = new Schema({
  // write schema here
  strollerType: { type: String, ref: "strollerTypes" },
  available: { type: Boolean, default: true },
  location: { type: String, ref: "strollerCenters" },
});

const Strollers = mongoose.model("strollers", strollersSchema);

export default Strollers;
