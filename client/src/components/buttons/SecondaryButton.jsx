import React from "react";
import "../../styles/SecondaryButton.css";
import Button, { commonProps } from "./Button";

function SecondaryButton({ href, text, width, icon, onClick }) {
  return (
    <Button
      href={href}
      text={text}
      width={width}
      icon={icon}
      onClick={onClick}
      type="submit"
      className="secondary-button"
    />
  );
}

SecondaryButton.propTypes = {
  ...commonProps,
};
export default SecondaryButton;
