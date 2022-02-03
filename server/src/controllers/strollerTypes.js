import { logError } from "../util/logging.js";
import StrollerTypes from "../models/StrollerTypes.js";

export const getStrollerTypes = async (req, res) => {
  try {
    const strollerTypes = await StrollerTypes.find();
    res.status(200).json({ success: true, result: strollerTypes });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to get strollerTypes, try again later",
    });
  }
};

export const getStrollerTypeById = async (req, res) => {
  const strollerTypeId = req.params.strollerTypeId;
  try {
    const strollerType = await StrollerTypes.findById({ _id: strollerTypeId });
    if (!strollerType)
      throw new Error(
        `There is no stroller Type with this id ${strollerTypeId}. Make sure you wrote the right id`
      );
    res.status(200).json({ success: true, result: strollerType });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};
