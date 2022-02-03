import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import propTypes from "prop-types";
import { useParams } from "react-router-dom";
import strollerPic from "../../images/beach-stroller.jpg";
import "../../styles/RentingRecap.css";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);
function RentingRecap() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalRentingTime, setTotalRentingTime] = useState(0);
  const [usageLocations, setUsageLocations] = useState({});
  const { orderId } = useParams();

  const { performFetch, cancelFetch } = useFetch(
    `/orders/getOneOrder/${orderId}`,
    (response) => {
      setUsageLocations({
        start: response.result.startLocation,
        end: response.result.endLocation,
      });
      setTotalPrice(response.result.cost.toFixed(2));
      setTotalRentingTime(
        dayjs
          .duration(response.result.endTime - response.result.startTime)
          .format("HH:mm:ss")
      );
    }
  );

  useEffect(() => {
    performFetch();
    return cancelFetch;
  }, []);

  return (
    <>
      <div className="page-container">
        <div className="page-content-container renting-recap">
          <div className="img-left">
            <img src={strollerPic} alt="stroller" />
          </div>
          <div className="order-details">
            <h1>Thank you for choosing Strolly!</h1>
            <h2>Order details</h2>
            <h3>
              Start Location: <span>{usageLocations.start}</span>{" "}
            </h3>
            <h3>
              End Location: <span>{usageLocations.end}</span>{" "}
            </h3>
            <h3>
              Usage time: <span>{totalRentingTime}</span>{" "}
            </h3>
            <h3>
              Total price: <span>{totalPrice} €</span>{" "}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

RentingRecap.propTypes = {
  setIsLoading: propTypes.func,
  setError: propTypes.func,
};

export default RentingRecap;
