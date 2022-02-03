import mongoose from "mongoose";
const { Schema } = mongoose;
const strollerTypesSchema = new Schema({
  _id: String,
  type: { type: String, required: true, unique: true },
  description: { type: String },
  features: [{ type: String, ref: "features" }],
  topFeatures: [String],
  specifications: [
    {
      title: String,
      description: String,
    },
  ],
  images: { live_img: String, stroller_imgs: [String] },
  price: {
    perMin: Number,
    perHour: Number,
    perDay: Number,
    perWeek: Number,
  },
  link: String,
});

const StrollerTypes = mongoose.model("strollerTypes", strollerTypesSchema);

export default StrollerTypes;
