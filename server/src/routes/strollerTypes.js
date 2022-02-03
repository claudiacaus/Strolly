import express from "express";
import {
  getStrollerTypes,
  getStrollerTypeById,
} from "../controllers/strollerTypes.js";

const strollersTypesRouter = express.Router();

strollersTypesRouter.get("/", getStrollerTypes);
strollersTypesRouter.get("/:strollerTypeId", getStrollerTypeById);

export default strollersTypesRouter;
