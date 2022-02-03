import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Input from "./Input";

describe("<SuccessMsg />", () => {
  afterEach(cleanup);

  it("should call onChange with the new input value", () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        name="test"
        value=""
        placeholder="Test field"
        onChange={mockOnChange}
      />
    );
    const inputEl = getByPlaceholderText("Test field");

    fireEvent.change(inputEl, { target: { value: "test2022" } });

    expect(mockOnChange).toBeCalled();
    expect(mockOnChange).toBeCalledWith("test2022");
  });
});
