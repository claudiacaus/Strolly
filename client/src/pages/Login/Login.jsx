/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import familyPic from "../../images/black-family-square-pic.jpg";
import "../../styles/Login.css";
import TEST_ID from "./Login.testid";
import TertiaryButton from "../../components/buttons/TertiaryButton";
import useFetch from "../../hooks/useFetch";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateUser } = useContext(userContext);
  const navigate = useNavigate();

  const onSuccess = (response) => {
    updateUser(response.result);
    navigate("/find_strollers");
  };

  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/user/login",
    onSuccess
  );

  useEffect(() => {
    return cancelFetch;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    performFetch({
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  };

  let statusComponent = null;
  if (error != null) {
    statusComponent = (
      <Error errorTxt={`${error.toString()}`} className="status-style" />
    );
  } else if (isLoading) {
    statusComponent = <Spinner className="status-style" />;
  }
  return (
    <div className="page-container">
      <div className="page-content-container">
        <div className="login-content">
          <div className="login-pic-content">
            <img
              src={familyPic}
              alt="family with stroller"
              className="login-pic"
              data-cy="login-img"
            />
          </div>

          <div className="login-form-content">
            <h1 data-cy="login-title" className="login-h1">
              Welcome to Strolly!
            </h1>
            <form onSubmit={handleSubmit} className="login-form">
              <Input
                name="email"
                value={email}
                placeholder="&#128231; Email *"
                required
                onChange={(value) => setEmail(value.toLowerCase())}
                data-testid={TEST_ID.emailInput}
                data-cy="input-email"
              />
              <Input
                name="password"
                type="password"
                placeholder="&#x1F512; Password *"
                value={password}
                required
                onChange={(value) => setPassword(value)}
                data-testid={TEST_ID.passwordInput}
                data-cy="input-password"
              />
              <TertiaryButton
                onClick={handleSubmit}
                type="submit"
                text="Login"
                width="80%"
                data-testid={TEST_ID.submitButton}
                testID="input-submit"
              />
            </form>
            <div data-cy="input-message" className="login-status">
              {statusComponent}
            </div>

            <div className="sign-up-to-login">
              <Link to={"/signup"}>
                <h4 className="h4-account-login" data-cy="login-signup-link">
                  Don't have an account? Sign up!
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
