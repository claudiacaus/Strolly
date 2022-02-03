import React, { useEffect, useState, useContext } from "react";
import propTypes from "prop-types";
import useFetch from "../../hooks/useFetch";
import OptionGroup from "./OptionGroup";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { userContext } from "../../context/userContext";

const LockForm = ({ setIsLoading, setError, setLockRespMsg }) => {
  const [cityBasedLocations, setCityBasedLocations] = useState(null);
  const { currentUser, updateUser } = useContext(userContext);
  const locationId = currentUser.activeOrder?.order.startLocationId;
  const endLocation = currentUser.activeOrder?.order.startLocation;
  const [selectedLocation, setSelectedLocation] = useState({
    locationId,
    endLocation,
  });

  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/centers/cityNames",
    (response) => {
      setCityBasedLocations(response.result.cityBasedLocations);
    }
  );

  // this useEffect to send the status of loading and error to the parent (Reservation.jsx)
  useEffect(() => {
    setIsLoading(isLoading);
    setError(error);
  }, [isLoading, error]);
  // this useEffect to send the status of loading and error to the parent (Reservation.jsx)

  const {
    isLoading: lockingLoading,
    error: lockingError,
    performFetch: lockingPerformFetch,
  } = useFetch("/orders/lock", async (response) => {
    await setLockRespMsg({
      success: true,
      msg: "Order is completed successfully",
      msg2: "loading receipt ...",
      href: `/reservation/success/recap/${response.orderId}`,
      timeout: 2000,
    });
    await updateUser(response.result);
  });

  useEffect(() => {
    setIsLoading(lockingLoading);
    setError(lockingError);
  }, [lockingLoading, lockingError]);

  useEffect(() => {
    performFetch();
    return cancelFetch;
  }, []);
  const handleSelection = (e) => {
    setSelectedLocation(JSON.parse(e.target.value));
  };

  const dropOffHandler = () => {
    lockingPerformFetch({
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: prepareJSONPackage(selectedLocation, currentUser),
    });
  };

  return (
    <>
      {cityBasedLocations && (
        <div className="drop-off-options">
          <OptionGroup
            options={cityBasedLocations}
            handleSelection={handleSelection}
          />
        </div>
      )}
      <PrimaryButton
        text={"Lock the Stroller"}
        width="90%"
        onClick={dropOffHandler}
        icon="fas fa-lock"
        type="submit"
      />
    </>
  );
};
const prepareJSONPackage = (selectedLocation, currentUser) => {
  return JSON.stringify({
    lockForm: {
      orderId: currentUser?.activeOrder.order?._id,
      strollerId: currentUser?.activeOrder.order?.strollerId,
      userId: currentUser?._id,
      locationId: selectedLocation.locationId,
      endLocation: selectedLocation.endLocation,
    },
  });
};

LockForm.propTypes = {
  setIsLoading: propTypes.func,
  setError: propTypes.func,
  setLockRespMsg: propTypes.func,
};

export default LockForm;
