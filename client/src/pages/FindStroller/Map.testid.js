import createTestIdFilePath from "../../util/createTestIdFilePath";

const TEST_ID = {
  container: `${createTestIdFilePath(
    "pages",
    "FindStroller",
    "Map"
  )}-container`,

  loadingContainer: `${createTestIdFilePath(
    "pages",
    "FindStroller",
    "CityNamesSection"
  )}-loadingContainer`,
  errorContainer: `${createTestIdFilePath(
    "pages",
    "FindStroller",
    "CityNamesSection"
  )}-errorContainer`,
};

export default TEST_ID;
