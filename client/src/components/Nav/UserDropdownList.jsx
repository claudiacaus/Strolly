import React from "react";
import propTypes from "prop-types";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function UserDropdownList({ isMobile, setIsMobile }) {
  const { currentUser, removeUser } = useContext(userContext);
  return (
    <Dropdown isMobile={isMobile} setIsMobile={setIsMobile} avatar>
      <>
        {!currentUser.isActivated && (
          <Link to={`/checkout/${currentUser._id}`}>Activate account</Link>
        )}
        {currentUser.activeOrder?.order && (
          <Link to={`/reservation/${currentUser._id}`}>Track Order</Link>
        )}
        <Link to="/" data-cy="avatar-dropdown-user">
          {currentUser.firstName} {currentUser.lastName}
        </Link>
        <Link
          to="/login"
          className="logout"
          onClick={removeUser}
          data-cy="avatar-dropdown-logout"
        >
          Logout
        </Link>
      </>
    </Dropdown>
  );
}

UserDropdownList.propTypes = {
  isMobile: propTypes.bool,
  setIsMobile: propTypes.func,
};
export default UserDropdownList;
