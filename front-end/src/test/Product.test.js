import React from 'react';
import renderWithRouter from './services/renderWithRouter';
import { fireEvent, wait, cleanup } from '@testing-library/react';
import axios from 'axios';

import { Provider } from './context';
import Products from './pages/Products';
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

describe('Products page', () => {
  test('page render', async () => {
    axios.get.mockResolvedValue({ data: productsMock });

    const { getByTestId } = renderWithRouter(
      <Provider>
        <Products />
      </Provider>
    );

    await wait();

    for (let i = 0; i < productsMock.length; i++) {
      const { id, name, price, volume, img } = productsMock[0];
      expect(getByTestId(`${i}-product-price`).innerHTML).toBe(`${price.toFixed(2)} R$`);
      expect(getByTestId(`${i}-product-img`).getAttribute('src')).toBe(img);
      expect(getByTestId(`${i}-product-name`).innerHTML).toBe(`${name} ${volume}ml`);
      expect(getByTestId(`${i}-product-qtd`).innerHTML).toBe('0');
    }

    expect(getByTestId("checkout-bottom-btn").innerHTML).toBe('Ver carrinho');
    expect(getByTestId("checkout-bottom-btn-value").innerHTML).toBe('R$ 0.00');
    fireEvent.click(getByTestId('0-product-plus'));
    expect(localStorage.getItem('products')).toBe("{\"1\":{\"price\":2.2,\"count\":1}}");
  //   expect(getByTestId('0-product-qtd').innerHTML).toBe('1');
  //   fireEvent.click(getByTestId('0-product-minus'));
  //   expect(localStorage.getItem('products')).toBe("{}");
  });

  test.skip('test component Header', () => {
    const { getByTestId, history } = renderWithRouter(
      <Provider>
        <Products />
      </Provider>,
    );

    expect(getByTestId('top-hamburguer').tagName).toBe('BUTTON');
    expect(getByTestId('top-title').innerHTML).toBe('Trybeer');

    fireEvent.click(getByTestId('top-hamburguer'));
    expect(getByTestId('side-menu-item-products').innerHTML).toBe('Produtos');
    expect(getByTestId('side-menu-item-my-orders').innerHTML).toBe('Meus pedidos');
    expect(getByTestId('side-menu-item-my-profile').innerHTML).toBe('Meus perfil');
    expect(getByTestId('side-menu-item-logout').innerHTML).toBe('Sair');

    fireEvent.click(getByTestId('side-menu-item-my-orders'));
    expect(history.location.pathname).toBe('/orders');
    history.push('/products');

    fireEvent.click(getByTestId('side-menu-item-my-profile'));
    expect(history.location.pathname).toBe('/profile');
    history.push('/products');

    fireEvent.click(getByTestId('side-menu-item-logout'));
    expect(history.location.pathname).toBe('/login');
  });
});
