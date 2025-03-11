global.localStorage = {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
  };
  

  // jest.setup.ts
import '@testing-library/jest-dom/extend-expect';

// Declarar a tipagem para global.alert
global.alert = jest.fn();