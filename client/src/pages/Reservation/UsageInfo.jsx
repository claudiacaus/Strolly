import React, { useContext } from "react";
import { userContext } from "../../context/userContext";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import { formatTime, msShouldStartFrom } from "../../util/formatTime";

function UsageInfo() {
  //write code here
  const { currentUser } = useContext(userContext);
  const [ms, setMs] = useState(() => {
    const usageStartTime = currentUser.activeOrder?.order.startTime;
    return msShouldStartFrom(usageStartTime);
  });
  const [usageTime, setUsageTime] = useState(<Spinner />);
  const [timeUnit, setTimeUnit] = useState("minutes");

  // add 1 sec / second
  useEffect(() => {
    if (ms > 1000 * 60 * 60) setTimeUnit("hours");
    setMs((prev) => prev + 1000);
    const timeoutID = setTimeout(() => {
      setUsageTime(formatTime(ms));
    }, 1000);
    return () => clearTimeout(timeoutID);
  }, [usageTime]);

  return (
    <>
      <p>
        Start location :{" "}
        <span style={{ color: "var(--orange-color)" }}>
          {currentUser.activeOrder.order.startLocation}
        </span>
      </p>
      <p>You are using stroller now for</p>
      <div style={{ marginBottom: "1.5rem" }}>
        <div>
          <div style={{ fontWeight: "bold" }}>
            {" "}
            <span style={{ fontSize: "25pt" }}>{usageTime}</span> {timeUnit}
          </div>
        </div>
      </div>
    </>
  );
}

export default UsageInfo;
