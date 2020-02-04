module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  rootDir: 'src/',
  moduleNameMapper: {
    '#root/(.*)': '<rootDir>/$1',
  },
};
