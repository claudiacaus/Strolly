import React, { useContext } from "react";
import Map from "./Map";
import "../../styles/FindStroller.css";
import { MapContext } from "../../context/mapContext";
import CardList from "./Card/CardList";
import CityOptions from "./CityOptions";

const FindStroller = () => {
  const { click, address } = useContext(MapContext);
  return (
    //! don't remove page-container or page-content-container classes unless you know what you're doing
    <div className="page-container">
      <div className="page-content-container">
        {/* You can put all your element inside this container */}
        <h2 className="find-Strollers-header">Find The Nearest Strollers</h2>
        <CityOptions />
        <Map />
        <div id="results-section">
          {click && (
            <>
              <h2 className="h2-address">
                <span>Pickup point:</span> {address.name}
              </h2>
              <h2 className="h2-address">
                <span>Address:</span> {address.address}
              </h2>
            </>
          )}
          {click ? (
            <CardList />
          ) : (
            <p style={{ textAlign: "center", height: "300px" }}>
              Please select the pickup point in the map to see results
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindStroller;
