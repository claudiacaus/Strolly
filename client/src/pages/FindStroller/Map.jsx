import React, { useContext, useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { MapContext } from "../../context/mapContext";
import useFetch from "../../hooks/useFetch";
import Logo from "../../images/icon-orange.png";
import PopUpInfo from "./Popup/PopupInfo";
import "../../styles/FindStroller.css";
import { MAPBOX_STYLES } from "../../data";

const Map = () => {
  const { viewport, setViewport, handleClick } = useContext(MapContext);
  const [geoLocation, setGeoLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/centers",
    (response) => {
      setGeoLocation(response.result);
    }
  );

  useEffect(() => {
    performFetch();

    return cancelFetch;
  }, []);

  return (
    <>
      <ReactMapGL
        {...viewport}
        style={{ margin: "20px auto", paddingBottom: "25px" }}
        width="100%"
        height="75vh"
        mapStyle={MAPBOX_STYLES}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
      >
        {!isLoading &&
          !error &&
          geoLocation &&
          geoLocation.map((center, index) =>
            isLoading ? (
              <p>Loading...</p>
            ) : (
              <Marker
                key={center._id}
                latitude={center.location.lat}
                longitude={center.location.long}
              >
                <img
                  data-cy={`map-location-pins${index + 1}`}
                  src={Logo}
                  alt="logo"
                  style={{ width: "40px", cursor: "pointer" }}
                  onMouseEnter={() => {
                    setSelectedLocation(center);
                  }}
                  onMouseLeave={() => {
                    setSelectedLocation(null);
                  }}
                  onClick={() => {
                    handleClick(center);
                  }}
                />
              </Marker>
            )
          )}
        {selectedLocation && (
          <Popup
            latitude={selectedLocation.location.lat}
            longitude={selectedLocation.location.long}
          >
            <p>{selectedLocation.centerName}</p>
            <PopUpInfo center={selectedLocation} />
          </Popup>
        )}
      </ReactMapGL>
    </>
  );
};

export default Map;
