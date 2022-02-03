import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import Avatar from "../../images/avatar2.png";
function Dropdown({ children, isMobile, setIsMobile, title, avatar }) {
  // isMobile and setIsMobile props are important for the side menu in mobile version and they are coming from Nav component
  // show state is for showing and hiding the dropdown list only
  const [show, setShow] = useState(false);
  useEffect(() => {
    //activate the window listener when the dropdown or side menu activated
    if (show || isMobile) window.addEventListener("click", handleWindowClick);

    return () => window.removeEventListener("click", handleWindowClick);
  }, [show, isMobile]);

  // to close all menus on the screen when clicking any thing or outside
  function handleWindowClick() {
    setShow(false);
    setIsMobile(false);
  }

  function handleDropDownList(evt) {
    evt.stopPropagation();
    setShow((prev) => !prev);
  }

  return (
    <li>
      <div className="dropdown" data-cy="nav-stroller_info-dropdown">
        <div
          className={`dropbtn ${avatar && "avatar-container"}`}
          onClick={handleDropDownList}
          data-cy="nav-login-avatar"
        >
          {title && (
            <>
              <span>Stroller info</span>{" "}
              <i className={show ? "fas fa-angle-up" : "fas fa-angle-down"} />
            </>
          )}
          {avatar && (
            <>
              <img src={Avatar} alt="avatar" className="avatar" />
            </>
          )}
        </div>
        {show && (
          <div data-cy="nav-selected-type" className="dropdown-content">
            {children}
          </div>
        )}
      </div>
    </li>
  );
}

Dropdown.propTypes = {
  children: propTypes.element.isRequired,
  isMobile: propTypes.bool,
  setIsMobile: propTypes.func,
  title: propTypes.bool,
  avatar: propTypes.bool,
};
export default Dropdown;
