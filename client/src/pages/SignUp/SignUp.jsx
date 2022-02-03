import React from "react";
import familyPhoto from "../../images/square-family-pic.jpg";
import CreateUser from "./CreateUser";
import "../../styles/SignUp.css";

const SignUp = () => {
  return (
    <div className="page-container">
      <div className="page-content-container">
        <div className="sign-up-main">
          <div className="sign-up-image">
            <img data-cy="signup-img" src={familyPhoto} />
          </div>
          <CreateUser />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
