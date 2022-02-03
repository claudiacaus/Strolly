import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SuccessMsg = ({ msg, msg2, isSuccessful, timeout, href }) => {
  // this is to redirect after showing this message (optional)
  const navigate = useNavigate();
  useEffect(() => {
    const navTimer = setTimeout(() => {
      navigate(href);
    }, timeout);
    return () => clearTimeout(navTimer);
  }, []);

  return (
    <div className="success-icon-container">
      <div style={{ width: "300px" }}>
        {isSuccessful && (
          <img
            src="https://res.cloudinary.com/drw1mbjuv/image/upload/v1642179984/success-cancel/success-img_mcisyl.gif"
            alt="success img"
          />
        )}

        {!isSuccessful && (
          <img
            src="https://res.cloudinary.com/drw1mbjuv/image/upload/v1642179984/success-cancel/error-img_tnpemv.gif"
            alt="error img"
          />
        )}
      </div>
      <h3>{msg}</h3>
      <h4>{msg2}</h4>
    </div>
  );
};

SuccessMsg.propTypes = {
  msg: PropTypes.string,
  msg2: PropTypes.string,
  isSuccessful: PropTypes.bool.isRequired,
  timeout: PropTypes.number,
  href: PropTypes.string,
};
export default SuccessMsg;
