module.exports = {
  testPathIgnorePatterns: ['/build/', '/dist/', '/node_modules/'],
  setupFilesAfterEnv: ['./src/__test__/setup_jest.js'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.[jt]s$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
};
