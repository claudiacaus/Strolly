import React from "react";
import propTypes from "prop-types";
import "../../styles/TertiaryButton.css";
import Button, { commonProps } from "./Button";

function TertiaryButton({ href, text, width, onClick, classes, testID }) {
  return (
    <Button
      text={text}
      href={href}
      width={width}
      onClick={onClick}
      type="submit"
      className={`tertiary-button ${classes}`}
      testID={testID}
    />
  );
}

TertiaryButton.propTypes = {
  ...commonProps,
  classes: propTypes.string,
  testID: propTypes.string,
};
export default TertiaryButton;
