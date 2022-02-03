import React from "react";
import "../../styles/StartButton.css";
import PrimaryButton from "../../components/buttons/PrimaryButton";

import TEST_ID from "./StartButton.testid";

const StartButton = () => {
  return (
    <div data-cy="start-button" className="start-button-container">
      <PrimaryButton
        href="/find_strollers"
        text="Start"
        width="200px"
        data-testid={TEST_ID.linkToFindStroller}
      />
    </div>
  );
};

export default StartButton;
