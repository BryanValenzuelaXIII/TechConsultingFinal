export const createMMKV = jest.fn(() => ({
  getString: jest.fn(),
  set: jest.fn(),
  delete: jest.fn(),
}));