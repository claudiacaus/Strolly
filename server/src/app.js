import express from "express";
import cors from "cors";

import userRouter from "./routes/user.js";
import centersRouter from "./routes/strollyCenters.js";
import strollersTypesRouter from "./routes/strollerTypes.js";
import strollersRouter from "./routes/strollers.js";
import strollersWithLocationsRouter from "./routes/strollersAndLocations.js";
import paymentsRouter from "./routes/payments.js";
import ordersRouter from "./routes/orders.js";
import errorHandler from "./middleware/error.js";

// Create an express server
const app = express();

// Tell express to use the json middleware
app.use(express.json());
// Allow everyone to access our API. In a real application, we would need to restrict this!
app.use(cors());

/****** Attach routes ******/
/**
 * We use /api/ at the start of every route!
 * As we also host our client code on heroku we want to separate the API endpoints.
 */
app.use("/api/user", userRouter);
app.use("/api/centers", centersRouter);
app.use("/api/strollerTypesInfo", strollersTypesRouter);
app.use("/api/strollers", strollersRouter);
app.use("/api/stroller_locations", strollersWithLocationsRouter);

// payments
app.use("/api/payments", paymentsRouter);

// use Stroller
app.use("/api/orders", ordersRouter);

//Error handler (Should be last piece of middleware)
app.use(errorHandler);

export default app;
