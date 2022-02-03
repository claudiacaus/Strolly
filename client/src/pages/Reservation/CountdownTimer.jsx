import React, { useState, useEffect } from "react";
import { userContext } from "../../context/userContext";
import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import "../../styles/CountdownTimer.css";
import propTypes from "prop-types";
import Spinner from "../../components/Spinner";
import { formatTime, msShouldStartFrom } from "../../util/formatTime";

const CountdownTimer = ({ setLockRespMsg, setIsLoading, setError }) => {
  const { currentUser, updateUser } = useContext(userContext);
  const [ms, setMs] = useState(() => {
    const reservationStartTime = currentUser.activeOrder?.order.reservationTime;
    const initialTimer = 1000 * 60 * 15;
    return initialTimer - msShouldStartFrom(reservationStartTime);
  });
  const [timer, setTimer] = useState(<Spinner />);
  const { performFetch, isLoading, error } = useFetch(
    `/orders/cancel/${currentUser.activeOrder?.order._id}`,
    async (response) => {
      await updateUser(response.result);
      await setLockRespMsg({
        success: false,
        msg: "Reservation has been canceled successfully",
        msg2: "redirecting to homepage in 4 seconds ...",
        href: "/",
        timeout: 4000,
      });
    }
  );

  // this useEffect to send the status of loading and error to the parent (Reservation.jsx)
  useEffect(() => {
    setIsLoading(isLoading);
    setError(error);
  }, [isLoading, error]);

  function handleCancelReservation() {
    const body = {
      userId: currentUser?._id,
      strollerId: currentUser.activeOrder?.order.strollerId,
    };
    performFetch({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  //subtract 1sec / second or cancel the order
  useEffect(() => {
    if (ms <= 0) return handleCancelReservation();
    setMs((prev) => prev - 1000);
    const countDown = setTimeout(() => {
      setTimer(formatTime(ms));
    }, 1000);
    return () => clearTimeout(countDown);
  }, [timer]);

  return (
    <div className="timer-container">
      <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
        You have <span style={{ fontSize: "25pt" }}>{timer}</span> minutes to
        pick up the stroller from{" "}
        <span style={{ color: "var(--orange-color)" }}>
          {currentUser.activeOrder.order.startLocation}
        </span>{" "}
        location
      </h3>

      <SecondaryButton
        type="button"
        onClick={handleCancelReservation}
        width="100%"
        text="Cancel Reservation"
      />
    </div>
  );
};

CountdownTimer.propTypes = {
  setLockRespMsg: propTypes.func,
  setIsLoading: propTypes.func,
  setError: propTypes.func,
};
export default CountdownTimer;
