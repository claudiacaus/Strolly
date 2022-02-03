import StrollyCenters from "../models/StrollyCenters.js";
import Strollers from "../models/Strollers.js";
import StrollerTypes from "../models/StrollerTypes.js";
import { logError } from "../util/logging.js";
import { contains } from "../util/uniqueArray.js";
import ErrorResponse from "../util/errorResponse.js";

export const getStrollyCenters = async (req, res, next) => {
  try {
    const strollyCenters = await StrollyCenters.find();
    if (strollyCenters.length === 0)
      return next(new ErrorResponse("There is no centers!", 404));
    res.status(200).json({ success: true, result: strollyCenters });
  } catch (error) {
    logError(error);
    next(error);
  }
};

export const getStrollyInTheCenter = async (req, res, next) => {
  const { locationId } = req.params;

  let strollers = {};
  try {
    const strollersInTheLocation = await Strollers.find({
      location: locationId,
      available: true,
    }).populate({
      path: "location",
    });
    if (strollersInTheLocation.length === 0)
      return next(
        new ErrorResponse(
          "There is no available strollers in the location, please try again later",
          404
        )
      );

    const strollerTypes = await StrollerTypes.find({});

    const categorizedStrollers = categorizeStrollers(
      strollerTypes,
      strollersInTheLocation
    );
    strollers = categorizedStrollers;

    res.status(200).json({
      success: true,
      result: { strollers },
    });
  } catch (error) {
    logError(error);
    next(error);
  }
};

export const getCenterCityNames = async (req, res, next) => {
  try {
    const cityNames = await getCityNames();
    if (cityNames.length === 0)
      return next(new ErrorResponse("There is no centers!", 404));

    const cityBasedLocations = await getCityBasedLocations(cityNames);

    res.status(200).json({
      success: true,
      result: { cityNames, cityBasedLocations },
    });
  } catch (error) {
    logError(error);
    next(error);
  }
};

const categorizeStrollers = (strollerTypes, strollers) => {
  const categorizedObj = [];

  for (let key in strollerTypes) {
    const category = {
      strollerTypeId: strollerTypes[key]._id,
      strollerType: strollerTypes[key].type,
      price: strollerTypes[key].price,
      image: strollerTypes[key].images.stroller_imgs[0],
    };
    category.strollers = [];
    categorizedObj.push(category);
  }

  for (let key in strollers) {
    const categoryArr = categorizedObj.find(
      (element) => element.strollerTypeId === strollers[key].strollerType
    );
    categoryArr.strollers.push(strollers[key]);
  }

  return categorizedObj;
};
const getCityNames = async () => {
  const strollerCenters = await StrollyCenters.find({});
  const cityNames = [];

  for (let key in strollerCenters) {
    if (!contains(cityNames, strollerCenters[key].location.cityName)) {
      cityNames.push(strollerCenters[key].location.cityName);
    }
  }
  return cityNames;
};
const getCityBasedLocations = async (cityNames) => {
  const cityBasedLocations = await Promise.all(
    cityNames.map(async (cityName) => {
      let locations = await StrollyCenters.find({
        "location.cityName": cityName,
      });
      return { city: cityName, locations };
    })
  );

  return cityBasedLocations;
};
