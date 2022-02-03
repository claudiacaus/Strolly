import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import useFetch from "../../../hooks/useFetch";

const PopUpInfo = ({ center }) => {
  const [strollers, setStrollers] = useState(null);
  const { performFetch, cancelFetch, isLoading, error } = useFetch(
    `/centers/location/${center._id}`,
    (response) => {
      setStrollers(response.result.strollers);
    }
  );
  useEffect(() => {
    performFetch();
    return cancelFetch;
  }, [center]);

  return (
    <div>
      {!isLoading && !error && strollers && (
        <p>{`${getTotalStrollers(strollers)} Strollers available`}</p>
      )}
      {error && <p>No Strollers available!</p>}
    </div>
  );
};
function getTotalStrollers(strollers) {
  return strollers
    .map((strollerType) => {
      return strollerType.strollers.length;
    })
    .reduce((a, b) => a + b, 0);
}
PopUpInfo.propTypes = { center: propTypes.object };

export default PopUpInfo;
