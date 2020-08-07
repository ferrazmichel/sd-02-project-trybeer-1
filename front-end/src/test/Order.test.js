import React from 'react';
import renderWithRouter from './service/renderWithRouter';
import { fireEvent, wait, cleanup } from '@testing-library/react';
import axios from 'axios';

import { Provider } from '../context';
import Order from '../pages/Client/Order';
import { orderMock } from './service/mock';

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
    axios.get.mockResolvedValue({ data: orderMock });

    const { getByTestId } = renderWithRouter(
      <Provider>
        <Order />
      </Provider>
    );

    await wait();
    
    expect(getByTestId('order-number')).toBe('1');
    expect(getByTestId('order-date')).toBe('08/05');
    expect(getByTestId('order-total-value')).toBe('120.00');

    expect(getByTestId('0-product-qtd')).toBe('2');
    expect(getByTestId('0-product-name')).toBe(' Skol Lata');
    expect(getByTestId('0-product-total-value')).toBe('4.40');
  });
});
