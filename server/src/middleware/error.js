/* eslint-disable no-unused-vars */
import ErrorResponse from "../util/errorResponse.js";
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  if (err.code === 11000) {
    const message = "Duplicate field Value Enter";
    error = new ErrorResponse(message, 400);
  }
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    msg: `${error.message}` || "Something went wrong, please try again later!",
  });
};

export default errorHandler;
