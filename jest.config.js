export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testMatch: ['**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js'],
};
