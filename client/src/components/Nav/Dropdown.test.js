import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown component", () => {
  beforeEach(cleanup);
  const elements = (
    <>
      <div>list item</div>
      <div>list item</div>
      <div>list item</div>
    </>
  );
  it("when title prop? should give Stroller info as a menu title", () => {
    const { getByText, queryByAltText } = render(
      <Dropdown title>{elements}</Dropdown>
    );
    getByText("Stroller info");
    const avatar = queryByAltText("avatar");
    expect(avatar).not.toBeInTheDocument();
  });

  it("when avatar prop? should use avatar photo as menu title", () => {
    const { getByAltText, queryByText } = render(
      <Dropdown avatar>{elements}</Dropdown>
    );
    getByAltText("avatar");
    const textTitle = queryByText("Stroller info");
    expect(textTitle).not.toBeInTheDocument();
  });

  it("when avatar prop? should should give another class name to parent div", () => {
    const { getByAltText } = render(<Dropdown avatar>{elements}</Dropdown>);
    const avatar = getByAltText("avatar");
    const parentDiv = avatar.parentElement;
    expect(parentDiv).toHaveClass("avatar-container");
  });

  it("when click on title toggle show the children menu", () => {
    const { getByText, getAllByText, queryAllByText } = render(
      <Dropdown title>{elements}</Dropdown>
    );
    const title = getByText("Stroller info");
    const icon = title.nextElementSibling;
    expect(icon).toHaveClass("fas fa-angle-down");

    //click to show the dropdown menu and change the arrow key
    fireEvent.click(title);
    const allChildrenElements = getAllByText("list item");
    expect(allChildrenElements).toHaveLength(3);
    expect(icon).toHaveClass("fas fa-angle-up");

    //click to hide the dropdown menu and change the arrow key
    fireEvent.click(title);
    const menuHidden = queryAllByText("list item");
    expect(menuHidden).toHaveLength(0);
    expect(icon).toHaveClass("fas fa-angle-down");
  });

  it("when click on avatar toggle show the children menu", () => {
    const { getByAltText, getAllByText, queryAllByText } = render(
      <Dropdown avatar>{elements}</Dropdown>
    );
    const avatar = getByAltText("avatar");
    //click to show the dropdown menu
    fireEvent.click(avatar);
    const dropdownMenu = getAllByText("list item");
    expect(dropdownMenu).toHaveLength(3);
    //click to hide the dropdown menu
    fireEvent.click(avatar);
    const menuHidden = queryAllByText("list item");
    expect(menuHidden).toHaveLength(0);
  });

  it("Children Elements should be inside the Div with className dropdown-content", () => {
    const { getByAltText, getAllByText } = render(
      <Dropdown avatar>{elements}</Dropdown>
    );
    const avatar = getByAltText("avatar");
    //click to show the dropdown menu
    fireEvent.click(avatar);
    const listItem = getAllByText("list item");
    const parentDiv = listItem[0].parentElement;
    expect(parentDiv).toHaveClass("dropdown-content");
  });
});
