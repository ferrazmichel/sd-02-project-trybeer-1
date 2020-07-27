import React from 'react';
import { cleanup, waitForDomChange } from '@testing-library/react';
import renderWithRouter from './services/RenderWithoutRouter';
import App from './App';

const mockProducts = [
  {id:'1', name: 'cerva1', price: 2.20, volume: 500 },
  {id:'2', name: 'cerva2', price: 4.40, volume: 750 },
]

afterEach(cleanup);

describe('Products page', () => {
  test('page render', async () => {
    const { getByTestId, history, container } = renderWithRouter(<App />);
    history.push('products');

    await waitForDomChange();

    console.log(history.location)
    console.log(container.innerHTML)
    // for (let i = 0; i < mockProducts.length; i++) {
    //   const { id, name, price, volume } = mockProducts[i];
    //   expect(getByTestId(`${i}-product-price`).innerHTML).toBe(2.20);
    //   expect(getByTestId(`${i}-product-img`)).toBeInTheDocument();
    //   expect(getByTestId(`${i}-product-img`)).toBeInTheDocument();
    // }

    expect(getByTestId("checkout-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("checkout-bottom-btn-value")).toBeInTheDocument();
  });
});

{/* <div className="product_comp">
      <p className="price" data-testid={`${index}-product-price`}>{price.toFixed(2)} R$</p>
      <img
        src="https://oimparcial.com.br/app/uploads/2020/06/cerveja-puro-malte-1024x512.jpg"
        alt="product"
        data-testid={`${index}-product-img`}
      />
      <p className="name" data-testid={`${index}-product-name`}>{name} {volume}ml</p>
      {counter(count, setCount, setCarShop, product, setUpdateCarShop, index)}
    </div> */}