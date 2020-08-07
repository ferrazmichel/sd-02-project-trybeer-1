import React from 'react';
import renderWithRouter from './service/renderWithRouter';
import { wait, cleanup } from '@testing-library/react';
import axios from 'axios';

import { Provider } from '../context';
import Order from '../pages/Client/Order';
import { orderMock } from './service/mock';

jest.mock('axios');

axios.get.mockImplementationOnce(() =>
  Promise.resolve({ data: orderMock }),
);

beforeEach(() => {
  cleanup();
  localStorage.clear();
  localStorage.setItem('token', 'd238d238')
});

afterEach(() => {
  cleanup();
  localStorage.clear();
});


describe('Orders page', () => {
  test('page render', async () => {
    const { getByTestId } = renderWithRouter(
      <Provider>
        <Order match={{ params: { id: '1' } }}/>
      </Provider>
    );

    await wait();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/orders/1',
      {"headers": {"Authorization": "d238d238"}});

    expect(getByTestId('order-number').innerHTML).toBe('1');
    expect(getByTestId('order-date').innerHTML).toBe('08/05');
    expect(getByTestId('order-total-value').innerHTML).toBe('120.00');

    expect(getByTestId('0-product-qtd').innerHTML).toBe('2');
    expect(getByTestId('0-product-name').innerHTML).toBe(' Skol Lata');
    expect(getByTestId('0-product-total-value').innerHTML).toBe('4.40');
  });
});
