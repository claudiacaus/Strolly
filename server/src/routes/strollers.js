import { Router } from "express";
import getStrollers from "../controllers/strollers.js";

const strollersRouter = Router();

strollersRouter.get("/", getStrollers);

export default strollersRouter;
