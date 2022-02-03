import "../../styles/Nav.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo-black.png";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
// dropdown list component in navbar for all stroller types
import StrollerInfoDropdownList from "./StrollerInfoDropdownList";
// dropdown list component in navbar for logged in user
import UserDropdownList from "./UserDropdownList";

const Nav = () => {
  // isMobile and setIsMobile props are important for the side menu in mobile version and they are coming from Nav component
  const [isMobile, setIsMobile] = useState(false);
  const { currentUser } = useContext(userContext);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <StrollerInfoDropdownList
          isMobile={isMobile}
          setIsMobile={setIsMobile}
          data-ly="nav-selected-type"
        />
        <Link to="/find_strollers" className="findstroller">
          <li data-cy="nav-find_stroller-button">Find Stroller</li>
        </Link>

        <Link to="/about" className="about">
          <li data-cy="nav-about-button">About</li>
        </Link>

        <Link to="/contact" className="contact">
          <li data-cy="nav-contact-button">Contact</li>
        </Link>
        {!currentUser && (
          <Link to="/login" className="login">
            <li data-cy="nav-login-button">Login</li>
          </Link>
        )}
        {currentUser && (
          <UserDropdownList IsMobile={isMobile} setIsMobile={setIsMobile} />
        )}
      </ul>

      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Nav;
