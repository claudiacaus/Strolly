import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import validateAllowedFields from "../util/validateAllowedFields.js";
const { Schema } = mongoose;
const phoneLength = (phoneNumber) => phoneNumber.length === 10;
const usersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "Please provide a firstName"],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Please provide a lastName"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please provide a email"],
    unique: true,
    match: [
      /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      "Please provide a valid email e.g. example@email.com",
    ],
  },
  phoneNumber: {
    type: String,
    validate: [phoneLength, "phone number should be 10 numbers"],
    trim: true,
    required: [true, "Please provide a phoneNumber"],
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Please provide a password"],
  },
  paymentMethod: { type: String, trim: true, default: "card" },
  isActivated: { type: Boolean, default: false },
  activeOrder: {
    strollerType: { type: String, ref: "strollerTypes" },
    order: { type: Schema.Types.ObjectId, ref: "orders" },
  },
});

usersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  //generate hashed password
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
usersSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

usersSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
const Users = mongoose.model("users", usersSchema);

export const validateUser = (userObject) => {
  const errorList = [];
  const allowedKeys = [
    "firstName",
    "lastName",
    "email",
    "phoneNumber",
    "password",
    "isActivated",
    "activeOrder",
  ];

  const validatedKeysMessage = validateAllowedFields(userObject, allowedKeys);

  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  if (userObject.firstName == null) {
    errorList.push("firstName is a required field");
  }
  if (userObject.lastName == null) {
    errorList.push("lastName is a required field");
  }
  if (userObject.email == null) {
    errorList.push("email is a required field");
  }
  if (userObject.phoneNumber == null) {
    errorList.push("phoneNumber is a required field");
  }
  if (userObject.password == null) {
    errorList.push("password is a required field");
  }

  return errorList;
};

export default Users;
