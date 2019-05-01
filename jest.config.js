const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  testPathIgnorePatterns: [
    '<rootDir>/e2e'
  ],
  coverageDirectory: '<rootDir>/coverage'
}
