import React from "react";
import SuccessMsg from "../components/SuccessMsg";

const PrivatePage = () => {
  return (
    <div className="page-container">
      <div className="page-content-container">
        {/* You can put all your element inside this container */}

        <SuccessMsg
          href="/login"
          msg="You need to login first"
          msg2="redirect to login page in 3 seconds ... "
          timeout={3000}
          isSuccessful={false}
        />
      </div>
    </div>
  );
};
export default PrivatePage;
