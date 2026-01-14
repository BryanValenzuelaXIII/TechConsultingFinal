const collection = jest.fn(() => ({
  doc: jest.fn(() => ({
    set: jest.fn(() => Promise.resolve()),
    get: jest.fn(() => Promise.resolve({ exists: true, data: () => ({}) })),
  })),
}));

const firestore = jest.fn(() => ({
  collection,
}));

export default firestore;