import React from "react";
import { useContext, useState } from "react";
import SuccessMsg from "../../components/SuccessMsg";
import { userContext } from "../../context/userContext";
import LockForm from "./LockForm";
import ReservedCard from "./ReservedCard";
import UnlockStroller from "./UnlockStroller";
import CountdownTimer from "./CountdownTimer";
import "../../styles/Reservation.css";
import ShowSpinnerOrErrors from "../../components/ShowSpinnerOrErrors";
import UsageInfo from "./UsageInfo";

function Reservation() {
  //write code here
  const { currentUser } = useContext(userContext);
  const [lockRespMsg, setLockRespMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // don't remove page-container or page-content-container classes unless you know what you're doing
  return (
    <div className="page-container">
      <div className="page-content-container">
        {lockRespMsg && (
          <SuccessMsg
            msg={lockRespMsg.msg}
            isSuccessful={lockRespMsg.success}
            msg2={lockRespMsg.msg2}
            href={lockRespMsg.href}
            timeout={lockRespMsg.timeout}
          />
        )}

        {!currentUser.activeOrder && !lockRespMsg && (
          <SuccessMsg
            isSuccessful={false}
            msg="You don't have active order"
            msg2="redirecting to the homepage in 4 seconds"
            href="/"
            timeout={4000}
          />
        )}

        {currentUser.activeOrder && (
          <div className="card-content">
            <div className="reserved-c">
              {currentUser.activeOrder?.strollerType && <ReservedCard />}
            </div>
            {/* this is unlock button */}
            <div className="timer-unlock">
              {!currentUser.activeOrder?.order.confirmed && (
                <div>
                  <h1 style={{ textAlign: "center" }}>Track reservation</h1>
                  <CountdownTimer
                    setLockRespMsg={setLockRespMsg}
                    setIsLoading={setIsLoading}
                    setError={setError}
                  />
                  <UnlockStroller
                    setIsLoading={setIsLoading}
                    setError={setError}
                  />
                </div>
              )}

              {currentUser.activeOrder?.order.confirmed && (
                <div className="lock-form">
                  <h1 style={{ textAlign: "center" }}>Track Order</h1>
                  <UsageInfo />
                  <LockForm
                    setLockRespMsg={setLockRespMsg}
                    setIsLoading={setIsLoading}
                    setError={setError}
                  />
                </div>
              )}

              <ShowSpinnerOrErrors
                error={error ? true : false}
                errorTxt={error}
                isLoading={isLoading}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reservation;
