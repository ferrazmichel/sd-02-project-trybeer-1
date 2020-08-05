import React from 'react';
import renderWithRouter from './services/renderWithRouter';
import { fireEvent, wait, cleanup } from '@testing-library/react';
import axios from 'axios';

import { Provider } from './context';
import Orders from './pages/Orders';
import { productsMock } from './services/mock';

jest.mock('axios');

beforeEach(() => {
  cleanup();
  localStorage.clear();
});

afterEach(() => {
  cleanup();
  localStorage.clear();
});

describe('Orders page', () => {
  test('page render', async () => {
    axios.get.mockResolvedValue({ data: productsMock });

    const { getByTestId } = renderWithRouter(
      <Provider>
        <Orders />
      </Provider>
    );

    await wait();

  });
});
