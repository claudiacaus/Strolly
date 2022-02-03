import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import StrollerInfo from "./pages/stroller_info/StrollerInfo";
import CreateUser from "./pages/User/CreateUser";
import UserList from "./pages/User/UserList";
import FindStroller from "./pages/FindStroller/FindStroller";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import MapProvider from "../src/context/mapContext";
import SignUp from "./pages/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import Payments from "./pages/payments/Payments";
import PaymentSuccess from "./pages/payments/PaymentSuccess";
import Login from "./pages/Login/Login";
import "./styles/App.css";
import { UserProvider } from "./context/userContext";
import PrivateRoute from "./PrivateRoute";
import Reservation from "./pages/Reservation/Reservation";
import NotFound from "./pages/NotFound";
import RentingRecap from "./pages/Reservation/RentingRecap";

const App = () => {
  return (
    <>
      <UserProvider>
        <MapProvider>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/user" element={<UserList />} />
            <Route path="/user/create" element={<CreateUser />} />
            <Route path="/find_strollers" element={<FindStroller />} />
            <Route
              path="/strollerinfo/:strollerTypeId/"
              element={<StrollerInfo />}
            />
            <Route
              path="/strollerinfo/:strollerTypeId/:strollerId/:centerName/:centerId"
              element={<StrollerInfo />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/checkout/:userId" element={<PrivateRoute />}>
              <Route exact path="/checkout/:userId" element={<Payments />} />
            </Route>

            <Route
              exact
              path="/checkout/success/:userId"
              element={<PrivateRoute />}
            >
              <Route
                path="/checkout/success/:userId"
                element={<PaymentSuccess />}
              />
            </Route>
            <Route
              exact
              path="/reservation/:userId/"
              element={<PrivateRoute />}
            >
              <Route
                exact
                path="/reservation/:userId/"
                element={<Reservation />}
              />
            </Route>
            <Route
              exact
              path="/reservation/success/recap/:orderId"
              element={<PrivateRoute />}
            >
              <Route
                exact
                path="/reservation/success/recap/:orderId"
                element={<RentingRecap />}
              />
            </Route>

            <Route element={<NotFound />} path="*" />
          </Routes>
        </MapProvider>

        <Footer />
      </UserProvider>
    </>
  );
};

export default App;
