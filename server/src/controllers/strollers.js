import { logError } from "../util/logging.js";
import Strollers from "../models/Strollers.js";

const getStrollers = async (req, res) => {
  try {
    const strollers = await Strollers.find();
    res.status(200).json({ success: true, result: strollers });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to get strollers, try again later.",
    });
  }
};

export const getStrollersWithLocations = async (req, res) => {
  try {
    const strollersWithLocations = await Strollers.find().populate("location");
    res.status(200).json({ success: true, result: strollersWithLocations });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to get strollers with location, try again later.",
    });
  }
};
export default getStrollers;
