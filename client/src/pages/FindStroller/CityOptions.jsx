import React from "react";
import { useContext, useState, useEffect } from "react";
import { MapContext } from "../../context/mapContext";
import useFetch from "../../hooks/useFetch";
import TEST_ID from "./Map.testid";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import {
  MAPBOX_CITY_COORDINATES_BASE_URL,
  MAPBOX_CITY_COORDINATES_URL_PARAMS,
  ZOOM_RATE,
} from "../../data";

const CityOptions = () => {
  const { setViewport } = useContext(MapContext);
  const [fetchError, setFetchError] = useState(null);
  const [cityNames, setCityNames] = useState(null);
  const { performFetch, isLoading, error, cancelFetch } = useFetch(
    "/centers/cityNames",
    (response) => {
      setCityNames(response.result.cityNames);
    }
  );
  useEffect(() => {
    performFetch();
    return cancelFetch;
  }, []);

  const handleSelection = async (e) => {
    setFetchError(null);
    try {
      const response = await fetch(
        `${MAPBOX_CITY_COORDINATES_BASE_URL}${
          cityNames[e.target.value - 1]
        }${MAPBOX_CITY_COORDINATES_URL_PARAMS}${
          process.env.REACT_APP_MAP_TOKEN
        }`
      );
      const data = await response.json();
      const coordinate = data?.features[0].geometry?.coordinates;
      setViewport({
        latitude: coordinate[1],
        longitude: coordinate[0],
        zoom: ZOOM_RATE,
      });
    } catch (err) {
      setFetchError("Coordinates could'nt find!");
    }
  };

  let statusComponent = null;

  if (isLoading) {
    statusComponent = <Spinner />;
  } else if (error != null) {
    statusComponent = <Error errorTxt={error} />;
  } else {
    statusComponent = (
      <div className="select-city-name-container">
        <select
          data-testid={TEST_ID.userList}
          data-loaded={cityNames != null}
          className="select-city-name"
          data-cy="city-options"
          onChange={handleSelection}
        >
          <option value="0">Select City</option>
          {cityNames &&
            cityNames.map((cityName, count) => {
              return (
                <option
                  key={cityName}
                  value={count + 1}
                  data-elementid={cityName}
                  data-cy={`select-city-name${count + 1}`}
                >
                  {cityName}
                </option>
              );
            })}
        </select>
      </div>
    );
  }
  return (
    <>
      {fetchError && <Error errorTxt={fetchError} />}
      {!fetchError && statusComponent}
    </>
  );
};
export default CityOptions;
