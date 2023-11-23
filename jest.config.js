module.exports = async () => {
  return {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/tests-examples/**/*.spec.ts'],
    roots: ['<rootDir>']
  }
}
