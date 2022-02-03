import createTestIdFilePath from "../../util/createTestIdFilePath";

const TEST_ID = {
  container: `${createTestIdFilePath(
    "pages",
    "FindStroller",
    "FindStroller"
  )}-container`,
  cardListContainer: `${createTestIdFilePath(
    "pages",
    "FindStroller",
    "CardList"
  )}-cardListContainer`,
  errorContainer: `${createTestIdFilePath(
    "pages",
    "FindStroller",
    "CardList"
  )}-errorContainer`,
  loadingContainer: `${createTestIdFilePath(
    "pages",
    "FindStroller",
    "CardList"
  )}-loadingContainer`,
  cardList: `${createTestIdFilePath(
    "pages",
    "FindStroller",
    "cardList"
  )}-cardList`,
  strollerInfoLink: `${createTestIdFilePath(
    "pages",
    "FindStroller",
    "card"
  )}-strollerInfoLink`,
  linkToReserve: `${createTestIdFilePath(
    "pages",
    "FindStroller",
    "card"
  )}-linkToReserve`,
};

export default TEST_ID;
