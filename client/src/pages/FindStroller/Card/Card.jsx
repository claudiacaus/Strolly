import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TEST_ID from "../FindStroller.testid";
import propTypes from "prop-types";
import useFetch from "../../../hooks/useFetch";
import { userContext } from "../../../context/userContext";
import ShowSpinnerOrErrors from "../../../components/ShowSpinnerOrErrors";
import { useContext } from "react";
import ReserveButtonSituations from "../../../components/ReserveButtonSituations";

const Card = ({ type }) => {
  const { updateUser, currentUser } = useContext(userContext);
  const navigate = useNavigate();
  const { performFetch, isLoading } = useFetch(
    `/orders/createOrder/${currentUser?._id}`,
    async (response) => {
      await updateUser(response.result);
      navigate(`/reservation/${currentUser?._id}`);
    }
  );

  const handleReservation = (e) => {
    e.preventDefault();

    performFetch({
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        order: {
          strollerId: type.strollers[0]._id,
          strollerType: type.strollerType,
          strollerTypeId: type.strollerTypeId,
          price: type.price.perMin,
          reservationTime: new Date().getTime(),
          startLocation: type.strollers[0].location.centerName,
          startLocationId: type.strollers[0].location._id,
        },
      }),
    });
  };

  return (
    <li
      key={type.strollerType}
      data-elementid={type.strollerTypeId}
      data-cy="card-item"
    >
      <div className="findStroller-card-container">
        <div className="findStroller-card-info">
          <ShowSpinnerOrErrors isLoading={isLoading} />
          {!isLoading && (
            <>
              <h2 className="s-title title" data-cy="card-title">
                {type.strollerType}
              </h2>
              <h4 className="s-available" data-cy="card-available-number">
                {type.strollers.length} strollers available
              </h4>
              <div className="img-control">
                <img
                  src={type.image}
                  alt={type.strollerType}
                  className="img-card image"
                  data-cy="card-img"
                />
              </div>

              <div className="findStroller-type-info">
                <div className="s-prices prices">
                  <p data-cy="card-prices">{type.price.perMin} € / Minute</p>
                </div>

                <div className="findStroller-links button-description">
                  <Link
                    to={`/strollerinfo/${type.strollerTypeId}/${type.strollers[0]?._id}/${type.strollers[0].location.centerName}/${type.strollers[0].location._id}`}
                    data-testid={TEST_ID.strollerInfoLink}
                    style={{
                      textDecoration: "none",
                    }}
                    data-cy="card-full-description"
                  >
                    <h3 className="h3-description">FULL DESCRIPTION</h3>
                  </Link>
                  <ReserveButtonSituations handleFun={handleReservation} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </li>
  );
};

Card.propTypes = {
  type: propTypes.object,
};

export default Card;
