import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Button from "./Button";

describe("Button Component", () => {
  beforeEach(cleanup);
  it("href prop ? should be 'A' element around the button", () => {
    const { getByText } = render(<Button href="/test" text="test button" />, {
      wrapper: MemoryRouter,
    });
    const testButton = getByText("test button");
    const buttonWrapper = testButton.parentElement;
    expect(buttonWrapper.getAttribute("href")).toBe("/test");
    expect(buttonWrapper.nodeName).toBe("A");
  });

  it("when no href should be only button without A anchor", () => {
    const { getByText } = render(<Button text="test button" />);
    const testButton = getByText("test button");
    expect(testButton.nodeName).toBe("BUTTON");
    expect(testButton.parentElement.nodeName).toBe("DIV");
  });

  it("When disabled prop is true the button should be disabled", () => {
    const { getByText } = render(<Button text="test button" disabled />);
    const testButton = getByText("test button");
    expect(testButton).toBeDisabled();
  });

  it("onClick func should be called", () => {
    const mockFunc = jest.fn();
    const { getByText } = render(
      <Button text="test button" onClick={mockFunc} />
    );
    const testButton = getByText("test button");
    fireEvent.click(testButton);
    expect(mockFunc).toBeCalled();
  });
});
