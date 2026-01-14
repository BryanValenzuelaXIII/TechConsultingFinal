const Geolocation = {
  getCurrentPosition: jest.fn((success, error) => {
    success({
      coords: {
        latitude: 0,
        longitude: 0,
        altitude: null,
        accuracy: 0,
        altitudeAccuracy: null,
        heading: 0,
        speed: 0,
      },
      timestamp: Date.now(),
    });
  }),
  watchPosition: jest.fn(() => 1),
  clearWatch: jest.fn(),
  stopObserving: jest.fn(),
};

export default Geolocation;
