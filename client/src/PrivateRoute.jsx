import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { userContext } from "./context/userContext";
import PrivatePage from "./pages/PrivatePage";

const PrivateRoute = () => {
  //in here we should update current User
  //Because if he keeps session in his local Storage and
  //if he delete his account in our db
  //he can still access the private page
  //but if we use jwt we can handle this problem
  const { currentUser } = useContext(userContext);
  // return currentUser ? <Outlet /> : <Navigate to="/login" />;
  return currentUser ? <Outlet /> : <PrivatePage />;
};
export default PrivateRoute;
