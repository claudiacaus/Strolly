import React from "react";
import { cleanup, render } from "@testing-library/react";
import Error from "./Error";
describe("Error component", () => {
  beforeEach(cleanup);
  it("should use the error text from the prop", () => {
    const { getByText } = render(<Error errorTxt="Test Error" />);
    getByText("Test Error");
  });
  it("the element of text should has err-msg className", () => {
    const { getByText } = render(<Error errorTxt="Test Error" />);
    const errorEl = getByText("Test Error");
    expect(errorEl).toHaveClass("err-msg");
  });
});
