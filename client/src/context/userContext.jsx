import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  // we should call this function anytime we manipulate the user Object in the db.
  const updateUser = (userObj) => {
    setCurrentUser(userObj);
    //save the user object to the localStorage
    localStorage.setItem("user", JSON.stringify(userObj));
  };
  const removeUser = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  return (
    <userContext.Provider value={{ currentUser, updateUser, removeUser }}>
      {children}
    </userContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.array,
};
