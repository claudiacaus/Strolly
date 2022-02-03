import mongoose from "mongoose";
const { Schema } = mongoose;
const featuresSchema = new Schema({
  // write schema here
  _id: String,
  title: String,
  description: String,
});
const Features = mongoose.model("features", featuresSchema);
export default Features;
