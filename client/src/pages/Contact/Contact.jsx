import React from "react";
import "../../styles/Contact.css";

const Contact = () => {
  return (
    //! don't remove page-container or page-content-container classes unless you know what you're doing
    <div className="page-container">
      <div
        className="page-content-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {/* You can put all your element inside this container */}
        <h2>
          Please get in touch and our expert support team will answer all your
          questions.
        </h2>
      </div>
    </div>
  );
};

export default Contact;
