import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { userContext } from "../../context/userContext";
import useFetch from "../../hooks/useFetch";
import propTypes from "prop-types";

function UnlockStroller({ setIsLoading, setError }) {
  const { updateUser, currentUser } = useContext(userContext);
  const orderId = currentUser.activeOrder?.order._id;

  const { performFetch, isLoading, error, cancelFetch } = useFetch(
    `/orders/unlock/${orderId}`,
    (response) => {
      // response gives us the user object after setting the start time
      updateUser(response.result);
    }
  );

  // this useEffect to send the status of loading and error to the parent (Reservation.jsx)
  useEffect(() => {
    setIsLoading(isLoading);
    setError(error);
  }, [isLoading, error]);

  useEffect(() => {
    return cancelFetch;
  }, [currentUser]);
  //write code here
  function handleUnlockStroller() {
    performFetch({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startTime: new Date().getTime(),
        confirmed: true,
      }),
    });
  }

  return (
    <PrimaryButton
      text="Unlock Stroller"
      width="100%"
      onClick={handleUnlockStroller}
      icon="fas fa-unlock-alt"
    />
  );
}
UnlockStroller.propTypes = {
  setIsLoading: propTypes.func,
  setError: propTypes.func,
};
export default UnlockStroller;
