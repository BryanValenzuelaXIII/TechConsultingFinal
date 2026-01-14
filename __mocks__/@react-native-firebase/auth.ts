export default () => ({
  onAuthStateChanged: jest.fn((callback) => {
    callback(null); // simulate no user logged in
    return jest.fn(); // return unsubscribe function
  }),
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve()),
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve()),
  signOut: jest.fn(() => Promise.resolve()),
});