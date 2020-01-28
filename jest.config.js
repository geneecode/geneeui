module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.test.json'
    }
  },
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
    'tsx'
  ],
  rootDir: 'src/',
  testRegex: '.test.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy'
  },
  'coverageDirectory': '../coverage',
  "testEnvironment": "jest-environment-jsdom-fourteen"
};