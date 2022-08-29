module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '@test/(.*)$': '<rootDir>/test/$1',
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
    '@molecules/(.*)$': '<rootDir>/src/components/molecules/$1',
    '@organisms/(.*)$': '<rootDir>/src/components/organisms/$1',
    '@wrappers/(.*)$': '<rootDir>/src/components/wrappers/$1',
    '@data/(.*)$': '<rootDir>/src/data/$1',
    '@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
