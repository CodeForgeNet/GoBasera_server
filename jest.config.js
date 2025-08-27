/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest', // if TS; remove if JS only
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html', 'lcov'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['**/__tests__/**/*.test.(ts|js)'],
};
