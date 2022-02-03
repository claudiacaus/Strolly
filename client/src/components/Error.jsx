import React from "react";
import propTypes from "prop-types";

function Error({ errorTxt }) {
  //write code here

  return <div className="err-msg">{errorTxt}</div>;
}

Error.propTypes = { errorTxt: propTypes.string };
export default Error;
