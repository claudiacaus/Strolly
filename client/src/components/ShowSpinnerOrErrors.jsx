import PropTypes from "prop-types";
import React from "react";
import Error from "./Error";
import Spinner from "./Spinner";

function ShowSpinnerOrErrors({ isLoading, error, errorTxt }) {
  //write code here

  return (
    <>
      {(isLoading || error) && (
        <div className="msg-container">
          {isLoading && <Spinner />}
          {error && <Error errorTxt={errorTxt} />}
        </div>
      )}
    </>
  );
}

ShowSpinnerOrErrors.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  errorTxt: PropTypes.string,
};
export default ShowSpinnerOrErrors;
