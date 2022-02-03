import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
// this is a general component of Button but we don't call it
function Button({
  href,
  text,
  width,
  icon,
  onClick,
  disabled,
  className,
  type,
  testID,
}) {
  return (
    <>
      {href ? (
        <Link to={href} style={{ width: width }}>
          <button
            type={type}
            disabled={disabled}
            className={className}
            style={{ width: width }}
            data-cy={testID}
          >
            {text}
            {/* this icon can be provided by Bootstrap or fontawesome icons libraries */}
            {icon && <i className={icon} style={{ marginLeft: "5px" }}></i>}
          </button>
        </Link>
      ) : (
        <button
          type={type}
          disabled={disabled}
          className={className}
          style={{ width: width }}
          onClick={onClick}
          data-cy={testID}
        >
          {text}
          {/* this icon can be provided by Bootstrap or fontawesome icons libraries */}
          {icon && <i className={icon} style={{ marginLeft: "5px" }}></i>}
        </button>
      )}
    </>
  );
}
//we can use this in other button components for not duplicating props
export const commonProps = {
  text: propTypes.string.isRequired,
  width: propTypes.string,
  href: propTypes.string,
  icon: propTypes.string,
  onClick: propTypes.func,
  testID: propTypes.string,
};

Button.propTypes = {
  ...commonProps,
  className: propTypes.string,
  type: propTypes.string,
  disabled: propTypes.bool,
};

export default Button;
