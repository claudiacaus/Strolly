import React from "react";
import { render, cleanup } from "@testing-library/react";
import ShowSpinnerOrErrors from "./ShowSpinnerOrErrors";

describe("Show Spinner or Error component", () => {
  beforeEach(cleanup);
  it("when no props it doesn't return anything", () => {
    const { container } = render(<ShowSpinnerOrErrors />);
    expect(container.childElementCount).toBe(0);
  });
  it("when isLoading or error ? it shows the container", () => {
    const { container } = render(<ShowSpinnerOrErrors isLoading />);
    expect(container.childElementCount).toBe(1);
    expect(container.firstElementChild).toHaveClass("msg-container");
  });
  it("when isLoading? it gives spinner", () => {
    const { container } = render(<ShowSpinnerOrErrors isLoading />);
    const spinnerContainer = container.firstChild;
    const spinner = spinnerContainer.firstChild;
    expect(spinner).toHaveClass("loader");
  });
  it("when error? it gives error", () => {
    const { container } = render(<ShowSpinnerOrErrors error />);
    const errContainer = container.firstChild;
    const err = errContainer.firstChild;
    expect(err).toHaveClass("err-msg");
  });
  it("when error & errortxt? it gives error with the text", () => {
    const { getByText } = render(
      <ShowSpinnerOrErrors error errorTxt="test error message" />
    );
    const errEl = getByText("test error message");
    expect(errEl).toHaveClass("err-msg");
  });
});
