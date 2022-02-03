import Users, { validateUser } from "../models/Users.js";
import { logError } from "../util/logging.js";
import validationErrorMessage from "../util/validationErrorMessage.js";
import Stripe from "stripe";
import ErrorResponse from "../util/errorResponse.js";

//! change this key to the live key in production environment
const stripe = new Stripe(
  "sk_test_51K9D90KxEN1n8FpgJHQIvSvrtTt1FISz1c1iLWnHWK0yArk8ZTYU1yxJfor7G0Sp4HvGEhOD8Q6Qw1REBZm4N7zb00bePXgods"
);
// the function getUsers is used to get all users from the database and return them to the client in json format (application/json).

export const getUsers = async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json({ success: true, result: users });
  } catch (error) {
    logError(error);
    next(error);
  }
};

// the function createUser is used to create a new user in the database and return the new user to the client in json format (application/json).

export const createUser = async (req, res, next) => {
  try {
    const { user } = req.body;

    if (typeof user !== "object") {
      return next(
        new ErrorResponse("You need to provide a 'user' object", 400)
      );
    }

    // check if the phone number letters only numbers
    if (isNaN(Number(user.phoneNumber))) {
      return next(
        new ErrorResponse("phone number should be only numbers", 400)
      );
    }

    const errorList = validateUser(user);

    if (errorList.length > 0) {
      return next(new ErrorResponse(validationErrorMessage(errorList), 400));
    }

    const alreadyExistUser = await Users.find({
      $or: [{ email: user.email }, { phoneNumber: user.phoneNumber }],
    });

    if (alreadyExistUser.length != 0) {
      return next(
        new ErrorResponse("E-mail or phone number already exist!", 401)
      );
    }
    const newUser = await Users.create(user);

    // making customer on stripe
    const { _id, firstName, lastName, email } = newUser;
    await stripe.customers.create({
      id: _id.toString(),
      name: `${firstName} ${lastName}`,
      email,
    });
    res.status(201).json({ success: true, result: newUser });
  } catch (error) {
    logError(error);
    next(error);
  }
};

// the function getUser is used to get a user from the database and return it to the client in json format (application/json).

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (typeof email !== "string" || typeof password !== "string") {
      return next(
        new ErrorResponse(
          "You need to provide an 'email' and a 'password' string",
          400
        )
      );
    } else if (email.length === 0 && password.length === 0) {
      return next(
        new ErrorResponse("You need to provide an email and a password", 400)
      );
    } else if (email.length === 0) {
      return next(new ErrorResponse("You need to provide an email", 400));
    } else if (password.length === 0) {
      return next(new ErrorResponse("You need to provide a password", 400));
    }

    const user = await Users.findOne({
      email: req.body.email,
    })
      .populate({
        path: "activeOrder",
        populate: { path: "strollerType" },
      })
      .populate({
        path: "activeOrder",
        populate: { path: "order" },
      });

    if (user == null) {
      return next(new ErrorResponse("User not found", 404));
    }
    if (!(await user.matchPasswords(password))) {
      return next(new ErrorResponse("Wrong password", 401));
    }
    res.status(200).json({ success: true, result: user });
    //sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

//modify user info
export const activateUserAccount = async (req, res) => {
  const { userId } = req.params;
  try {
    await Users.findByIdAndUpdate(userId, req.body);
    const userActivated = await Users.findById(userId);
    res.status(200).json({ success: true, result: userActivated });
  } catch (error) {
    res.status(404).json({
      success: false,
      msg: `bad request this Id ${userId} is not found`,
    });
    logError(error);
  }
};
