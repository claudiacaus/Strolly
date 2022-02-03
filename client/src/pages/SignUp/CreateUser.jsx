import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import useFetch from "../../hooks/useFetch";
import TEST_ID from "./SignUp.testid";
import TertiaryButton from "../../components/buttons/TertiaryButton";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmError, setConfirmError] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  const { updateUser } = useContext(userContext);
  const navigate = useNavigate();
  let statusComponent = null;
  // we use userContext here to login automatically when creating the account successfully

  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/user/create",
    async (response) => {
      await updateUser(response.result);
      const userId = response.result._id;
      navigate(`/checkout/${userId}`);
    }
  );

  useEffect(() => {
    return cancelFetch;
  }, []);

  const resetStatus = () => {
    statusComponent = null;
    setConfirmError(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    resetStatus();
    if (password === confirmPassword) {
      performFetch({
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          user: { firstName, lastName, email, phoneNumber, password },
        }),
      });
    } else {
      setConfirmError("Password doesn't match!");
    }
  };

  if (error != null || confirmError)
    statusComponent = (
      <Error
        errorTxt={confirmError ? confirmError : error}
        className="error-sign-up"
      />
    );
  else if (isLoading) statusComponent = <Spinner className="spinner" />;

  return (
    <div data-testid={TEST_ID.container} className="sign-up-input-container">
      <div className="sign-up-input-headers" data-cy="signup-header">
        <h2>Welcome to Strolly!</h2>
        <h4>Ready to start?</h4>
      </div>
      <div className="sign-up-form-container">
        <form onSubmit={handleSubmit} className="sign-up-form">
          <label className="label-sign-up">
            <div>
              {" "}
              First Name{" "}
              <span className="asterisk" data-cy="input-asterisk">
                *
              </span>
            </div>
            <Input
              name="firstName"
              value={firstName}
              placeholder="John"
              onChange={(value) => setFirstName(value)}
              data-testid={TEST_ID.firstNameInput}
              required
              data-cy="signup-first-name"
            />
          </label>
          <label className="label-sign-up">
            <div>
              {" "}
              Last Name{" "}
              <span className="asterisk" data-cy="input-asterisk">
                *
              </span>
            </div>
            <Input
              name="lastName"
              value={lastName}
              placeholder="Doe"
              required
              onChange={(value) => setLastName(value)}
              data-testid={TEST_ID.lastNameInput}
              data-cy="signup-last-name"
              style={{ height: "40px" }}
            />
          </label>
          <label className="label-sign-up">
            <div>
              {" "}
              Email{" "}
              <span className="asterisk" data-cy="input-asterisk">
                *
              </span>
            </div>
            <Input
              name="email"
              value={email}
              placeholder="&#x1F4E7; example@email.com"
              required
              onChange={(value) => setEmail(value.toLowerCase())}
              data-testid={TEST_ID.emailInput}
              type="email"
              data-cy="signup-email"
            />
          </label>
          <label className="label-sign-up">
            <div>
              {" "}
              Phone Number{" "}
              <span className="asterisk" data-cy="input-asterisk">
                *
              </span>
            </div>
            <Input
              name="phoneNumber"
              value={phoneNumber}
              placeholder="&#x260E;"
              required
              onChange={(value) => setPhoneNumber(value)}
              data-testid={TEST_ID.phoneNumberInput}
              type="tel"
              maxLength="10"
              minLength="10"
              data-cy="signup-phone-number"
            />
          </label>
          <label className="label-sign-up">
            <div>
              {" "}
              Password{" "}
              <span className="asterisk" data-cy="input-asterisk">
                *
              </span>
            </div>
            <Input
              name="password"
              type="password"
              placeholder="&#x1F512;"
              value={password}
              required
              onChange={(value) => setPassword(value)}
              data-testid={TEST_ID.passwordInput}
              data-cy="signup-password"
            />
          </label>
          <label className="label-sign-up">
            <div>
              {" "}
              Confirm Password{" "}
              <span className="asterisk" data-cy="input-asterisk">
                *
              </span>
            </div>
            <Input
              name="confirm-password"
              type="password"
              placeholder="&#x1F512;"
              value={confirmPassword}
              required
              onChange={(value) => setConfirmPassword(value)}
              data-testid={TEST_ID.confirmPasswordInput}
              data-cy="signup-confirm-password"
            />
          </label>
          <div className="privacy-policy-checkbox">
            <input
              name="privacy-policy-checkbox"
              type="checkbox"
              value="false"
              id="privacy-policy"
              onChange={() => setIsSelected(!isSelected)}
              required
              data-cy="signup-checkbox"
            />
            <label className="checkbox" htmlFor="privacy-policy">
              I agree to the terms and conditions and the privacy policy
            </label>
          </div>
          <TertiaryButton
            classes="signup-btn"
            width="100%"
            text="Sign Up"
            testID="signup-submit"
          />
          <div className="sign-up-status" data-cy="signup-status">
            {statusComponent}
          </div>
        </form>
      </div>

      <div className="sign-up-to-login">
        <Link to={"/login"}>
          <h4 data-cy="signup-login-link" className="h4-account-login">
            Already have an account? Login
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default CreateUser;
