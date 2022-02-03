import mongoose from "mongoose";
const { Schema } = mongoose;
const strollyCentersSchema = new Schema({
  _id: String,
  centerName: String,
  location: {
    cityName: String,
    address: String,
    lat: Number,
    long: Number,
  },
});
const StrollyCenters = mongoose.model("strollerCenters", strollyCentersSchema);
export default StrollyCenters;
