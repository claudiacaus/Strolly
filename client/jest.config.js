module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./setupTests.js"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|svg|mp4)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
