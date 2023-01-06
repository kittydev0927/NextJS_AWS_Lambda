const mockStyles = require.resolve('./test/style-mock.js');

module.exports = {
  collectCoverageFrom: [
    'components/**/*',
    'services/application/*',
    '!**/*.types.ts',
    '!**/index.ts',
    // See components/forms/organisms/SignInForm/SignInForm.spec.md
    // for details and justification.
    '!./components/forms/molecules/OktaWidget/**',
    '!./components/forms/organisms/SignInForm/**',
    '!./components/layouts/molecules/PageOverlay/**',
    '!./components/layouts/organisms/Header/**',
    '!./components/layouts/organisms/PageLayout/**',
    '!./components/pages/LoginPage/**',
    '!./components/pages/SSOLandingPage/**',
    // See components/layouts/organisms/Map/Map.spec.md
    '!./components/layouts/organisms/Map/**',
    // See components/layouts/molecules/PropertyCardPanel.spec.md
    '!./components/layouts/molecules/PropertyCardPanel/**',
    // See components/forms/molecules/PersonaClient/PersonaClient.spec.md
    '!./components/forms/molecules/PersonaClient/**',
    // See components/forms/molecules/StripePayment/StripePayment.spec.md
    '!./components/forms/molecules/StripePayment/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    '#api/(.*)': '<rootDir>/api/$1',
    '#auth/(.*)': '<rootDir>/auth/$1',
    '#components/(.*)': '<rootDir>/components/$1',
    '#constants/(.*)': '<rootDir>/constants/$1',
    '#public/(.*)': '<rootDir>/public/$1',
    '#services/(.*)': '<rootDir>/services/$1',
    '#styles/(.*)': '<rootDir>/styles/$1',
    '#tests/(.*)': '<rootDir>/test/$1',
    '#utils/(.*)': '<rootDir>/utils/$1',
    '\\.(css|less)$': mockStyles,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      require.resolve('./test/file-mock.js'),
    'swiper/css': mockStyles,
  },
  preset: 'ts-jest',
  reporters: ['default', 'jest-junit', 'jest-html-reporter'],
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testEnvironment: 'jsdom',
  testResultsProcessor: 'jest-sonar-reporter',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['^.+\\.module\\.(css|sass|scss)$'],
};
