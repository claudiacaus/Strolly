import { Router } from "express";
import { getStrollersWithLocations } from "../controllers/strollers.js";

const strollersWithLocationsRouter = Router();

strollersWithLocationsRouter.get("/", getStrollersWithLocations);

export default strollersWithLocationsRouter;
