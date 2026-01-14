module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|@reduxjs|immer|react-redux)/)',
  ],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
   moduleNameMapper: {
    '^@react-native-firebase/(.*)$': '<rootDir>/__mocks__/@react-native-firebase/$1',
    '^react-native-mmkv$': '<rootDir>/__mocks__/react-native-mmkv.ts',
    '^@react-native-community/geolocation$': '<rootDir>/__mocks__/@react-native-community/geolocation.ts',
    '^react-native-maps$': '<rootDir>/__mocks__/react-native-maps.js',
  },
};