import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/strollersInfo.css";
import checkMark from "../../images/tick.png";
import ShowSpinnerOrErrors from "../../components/ShowSpinnerOrErrors";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import ReserveButtonSituations from "../../components/ReserveButtonSituations";

function StrollerInfo() {
  //write code here
  const { currentUser, updateUser } = useContext(userContext);
  const [strollerType, setStrollerType] = useState(null);
  const { strollerTypeId, strollerId, centerName, centerId } = useParams();
  const navigate = useNavigate();
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    `/strollerTypesInfo/${strollerTypeId}`,
    (response) => {
      setStrollerType(response.result);
    }
  );
  useEffect(() => {
    performFetch();

    return cancelFetch;
  }, [strollerTypeId]);

  //* handle reservation
  const {
    performFetch: createOrder,
    isLoading: loadingRequest,
    error: orderError,
  } = useFetch(`/orders/createOrder/${currentUser?._id}`, async (response) => {
    await updateUser(response.result);
    navigate(`/reservation/${currentUser?._id}`);
  });

  const handleReservation = (e) => {
    e.preventDefault();

    createOrder({
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        order: {
          strollerId: strollerId,
          strollerType: strollerType.type,
          strollerTypeId: strollerTypeId,
          price: strollerType.price.perMin,
          reservationTime: new Date().getTime(),
          startLocation: centerName,
          startLocationId: centerId,
        },
      }),
    });
  };
  //* ********************* //
  return (
    //! don't remove page-container or page-content-container classes unless you know what you're doing
    <div className="page-container">
      <div className="page-content-container">
        <ShowSpinnerOrErrors
          isLoading={isLoading || loadingRequest}
          error={error || orderError ? true : false}
          errorTxt="Failed to fetch data, please check your connection or contact us"
        />
        {strollerType &&
          !isLoading &&
          !error &&
          !loadingRequest &&
          !orderError && (
            <>
              <div className="stroller-info-container">
                <h1 data-cy="stroller-header" className="stroller-header">
                  {strollerType.type}
                </h1>
                <div className="stroller-img">
                  <img
                    src={strollerType.images.stroller_imgs[0]}
                    alt="stroller Photo"
                    data-cy="stroller-img"
                  />
                </div>
                <div className="stroller-details-container">
                  <div className="stroller-description">
                    <h2>Description</h2>
                    <div data-cy="stroller-description">
                      {strollerType.description}
                    </div>
                  </div>
                  <div className="stroller-features">
                    <h2 data-cy="stroller-top_feature">Top Features</h2>
                    <div>
                      <ul>
                        {strollerType.topFeatures.map((feature, i) => (
                          <li key={i}>
                            <img
                              src={checkMark}
                              alt="checkmark"
                              className="checkmark"
                              data-cy="stroller-img"
                            />{" "}
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="stroller-price">
                    <h2>Stroller price</h2>
                    <div>
                      <p data-cy="card-prices">
                        Per Minute : {strollerType.price.perMin} €
                      </p>
                    </div>
                  </div>
                  {strollerId && (
                    <ReserveButtonSituations handleFun={handleReservation} />
                  )}
                  {!strollerId && (
                    <SecondaryButton
                      href="/find_strollers"
                      text="Search nearest stroller"
                      width="100%"
                      icon="bi bi-search"
                    />
                  )}
                </div>
              </div>
            </>
          )}
      </div>
    </div>
  );
}

export default StrollerInfo;
