import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Dropdown from "./Dropdown";

const StrollerInfoDropdownList = ({ isMobile, setIsMobile }) => {
  const [strollerTypes, setStrollersTypes] = useState([]);
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/strollerTypesInfo/",
    (response) => {
      setStrollersTypes(response.result);
    }
  );

  useEffect(() => {
    performFetch();
    return cancelFetch;
  }, []);

  return (
    <Dropdown isMobile={isMobile} setIsMobile={setIsMobile} title>
      <>
        {isLoading && <div> loading... </div>}
        {error && <div>{error}</div>}
        {strollerTypes.map((type, index) => (
          <Link
            to={`/strollerinfo/${type._id}`}
            key={type._id}
            data-cy={`nav-selected-type${index + 1}`}
          >
            {type.type}
          </Link>
        ))}
      </>
    </Dropdown>
  );
};
StrollerInfoDropdownList.propTypes = {
  isMobile: propTypes.bool,
  setIsMobile: propTypes.func,
};
export default StrollerInfoDropdownList;
