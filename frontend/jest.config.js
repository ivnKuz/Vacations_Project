/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // other Jest configurations...
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  // Add the following lines to support ECMAScript Modules
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      // Add the next line to enable experimental support for ESM
      useESM: true,
    },
  },
};
