import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import SuccessMsg from "./SuccessMsg";

describe("<SuccessMsg />", () => {
  afterEach(cleanup);

  it("should show the content of msg prop", () => {
    const { getByText } = render(
      <SuccessMsg isSuccessful msg="Hello world!" />,
      { wrapper: MemoryRouter }
    );

    getByText("Hello world!");
  });

  it("should show success image when isSuccessful prop is true", () => {
    const { queryByAltText } = render(
      <SuccessMsg isSuccessful msg="Hello world!" />,
      { wrapper: MemoryRouter }
    );

    expect(queryByAltText("success img")).toBeInTheDocument();
    expect(queryByAltText("error img")).not.toBeInTheDocument();
  });

  it("should show error image when isSuccessful prop is false", () => {
    const { queryByAltText } = render(
      <SuccessMsg isSuccessful={false} msg="Hello world!" />,
      { wrapper: MemoryRouter }
    );

    expect(queryByAltText("error img")).toBeInTheDocument();
    expect(queryByAltText("success img")).not.toBeInTheDocument();
  });
});
