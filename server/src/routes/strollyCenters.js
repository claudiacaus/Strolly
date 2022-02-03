import { Router } from "express";
import {
  getCenterCityNames,
  getStrollyCenters,
  getStrollyInTheCenter,
} from "../controllers/strollyCenters.js";

const centersRouter = Router();

centersRouter.get("/", getStrollyCenters);
centersRouter.get("/cityNames", getCenterCityNames);
centersRouter.get("/location/:locationId", getStrollyInTheCenter);

export default centersRouter;
