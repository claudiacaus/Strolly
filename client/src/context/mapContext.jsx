import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { AMSTERDAM_LAT, AMSTERDAM_LON } from "../data.js";

export const MapContext = createContext();

const MapProvider = ({ children }) => {
  const [oneCenter, setOneCenter] = useState(null);
  const [click, setClick] = useState(false);
  const [address, setAddress] = useState("");
  const [viewport, setViewport] = useState({
    latitude: AMSTERDAM_LAT,
    longitude: AMSTERDAM_LON,
    zoom: 7,
  });
  const handleClick = (center) => {
    setOneCenter(center._id);
    setClick(true);
    setAddress({
      name: center.centerName,
      address: center.location.address,
    });
    window.location = "#results-section";
  };

  const values = {
    address,
    oneCenter,
    setOneCenter,
    click,
    setClick,
    handleClick,
    viewport,
    setViewport,
  };
  return (
    <div>
      <MapContext.Provider value={values}>{children}</MapContext.Provider>
    </div>
  );
};
MapProvider.propTypes = {
  children: PropTypes.array,
};
export default MapProvider;
