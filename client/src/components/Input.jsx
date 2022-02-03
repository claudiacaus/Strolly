import React from "react";
import PropTypes from "prop-types";

const Input = ({ onChange, ...rest }) => {
  return <input {...rest} onChange={(e) => onChange(e.target.value)} />;
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
