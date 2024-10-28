// jest.config.js
module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  moduleFileExtensions: [
    "js", "jsx"
  ],
  transformIgnorePatterns: [
    "/node_modules/(?!(axios)/)", // Only transform the axios module if needed
  ],
  moduleNameMapper: {
    "\\.svg$": "identity-obj-proxy",
    "\\.(css|less)$": "identity-obj-proxy",
    "^react-spring(.*)$": "<rootDir>/__mock__/react-spring-mock.js"
  },
  testEnvironment: "jsdom",
};
