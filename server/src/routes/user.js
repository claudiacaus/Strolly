import express from "express";
import {
  activateUserAccount,
  createUser,
  getUsers,
  loginUser,
} from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/create", createUser);
userRouter.post("/login", loginUser);
userRouter.put("/update/:userId", activateUserAccount);

export default userRouter;
