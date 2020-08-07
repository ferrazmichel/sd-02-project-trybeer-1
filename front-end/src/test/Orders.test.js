import React from 'react';
import renderWithRouter from './service/renderWithRouter';
import { fireEvent, wait, cleanup } from '@testing-library/react';
import axios from 'axios';

import { Provider } from '../context';
import Orders from '../pages/Client/Orders';
import { ordersMock } from './service/mock';

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
    axios.get.mockResolvedValue({ data: ordersMock });

    const { getByTestId, container, history } = renderWithRouter(
      <Provider>
        <Orders />
      </Provider>
    );

    await wait();

    expect(getByTestId('0-order-number').innerHTML).toBe('Pedido 1');
    expect(getByTestId('0-order-date').innerHTML).toBe('08/05');
    expect(getByTestId('0-order-total-value').innerHTML).toBe('R$ 120.00');
    const order  = container.querySelector('.order');
    fireEvent.click(order);

    expect(history.location.pathname).toBe('/orders/1');
  });
});
