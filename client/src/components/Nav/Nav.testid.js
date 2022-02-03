import createTestIdFilePath from "../../util/createTestIdFilePath";

const TEST_ID = {
  linkToHome: `${createTestIdFilePath("components", "Nav")}-linkToHome`,
  linkToStrollerInfo: `${createTestIdFilePath(
    "components",
    "Nav"
  )}-linkToStrollerInfo`,
  linkToFindStroller: `${createTestIdFilePath(
    "components",
    "Nav"
  )}-linkToFindStroller`,
  linkToAbout: `${createTestIdFilePath("components", "Nav")}-linkToAbout`,
  linkToContact: `${createTestIdFilePath("components", "Nav")}-linkToContact`,
  linkToLogin: `${createTestIdFilePath("components", "Nav")}-linkToLogin`,
  //linkToUsers: `${createTestIdFilePath("components", "Nav")}-linkToUser`,
  strollerTypesContainer: `${createTestIdFilePath(
    "components",
    "Nav"
  )}-strollerTypesContainer`,
};

export default TEST_ID;
