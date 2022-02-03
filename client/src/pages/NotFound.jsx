import React from "react";
import SuccessMsg from "../components/SuccessMsg";

const NotFound = () => {
  return (
    <div className="page-container">
      <div className="page-content-container">
        {/* You can put all your element inside this container */}

        <SuccessMsg
          isSuccessful={false}
          msg="Not Found Page"
          msg2="redirecting to homepage in 3 seconds ..."
          timeout={3000}
          href="/"
        />
      </div>
    </div>
  );
};
export default NotFound;
