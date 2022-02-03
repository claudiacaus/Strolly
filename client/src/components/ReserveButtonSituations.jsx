import React from "react";
import propTypes from "prop-types";
import { useContext } from "react";
import { userContext } from "../context/userContext";
import TertiaryButton from "./buttons/TertiaryButton";
import PrimaryButton from "./buttons/PrimaryButton";

function ReserveButtonSituations({ handleFun }) {
  const { currentUser } = useContext(userContext);

  let reserveButton;
  if (!currentUser) {
    reserveButton = (
      <TertiaryButton
        href="/login"
        text="Login to reserve"
        width="100%"
        testID="card-reserve-button-login"
      />
    );
  } else if (!currentUser.isActivated) {
    reserveButton = (
      <PrimaryButton
        href={`/checkout/${currentUser?._id}`}
        text="Activate account"
        width="100%"
        testID="card-reserve-not-activated-button"
      />
    );
  } else if (currentUser.isActivated && !currentUser.activeOrder?.order) {
    // if the user is activated but no active order
    reserveButton = (
      <PrimaryButton
        text="Reserve"
        width="100%"
        onClick={handleFun}
        testID="card-reserve-activated-button"
      />
    );
  } else {
    // if the user is activated and he has active order
    reserveButton = (
      <PrimaryButton
        text="Track Order"
        width="100%"
        href={`/reservation/${currentUser._id}`}
        testID="card-reserve-activated-button"
      />
    );
  }
  return <>{reserveButton}</>;
}

ReserveButtonSituations.propTypes = {
  handleFun: propTypes.func.isRequired,
};
export default ReserveButtonSituations;
