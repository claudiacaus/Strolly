import createTestIdFilePath from "../../util/createTestIdFilePath";

const TEST_ID = {
  container: `${createTestIdFilePath("pages", "Login")}-container`,
  emailInput: `${createTestIdFilePath("pages", "Login")}-emailInput`,

  passwordInput: `${createTestIdFilePath("pages", "Login")}-passwordInput`,
  submitButton: `${createTestIdFilePath("pages", "Login")}-submitButton`,
};

export default TEST_ID;
