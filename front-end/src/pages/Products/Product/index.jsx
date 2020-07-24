import React, { useState } from 'react';

import './style.css';
import { useEffect } from 'react';

const add = (count, setCount, setCarShop, product, setUpdateCarShop) => {
  const { id, price } = product;
  const curr = count + 1;
  setCount(curr);
  setCarShop((currCar) => {
    currCar[id] = { price, count: curr };
    return currCar;
  });
  setUpdateCarShop(curr => !curr);
};

const remove = (count, setCount, setCarShop, product, setUpdateCarShop) => {
  const { id, price } = product;
  const curr = count - 1;
  if (count > 0) {
    setCount(curr);
    setCarShop((currCar) => {
      currCar[id] = { price, count: curr };
      return currCar;
    });
  }
  setUpdateCarShop(curr => !curr);
};

const counter = (count, setCount, setCarShop, product, setUpdateCarShop, index) => {
  return (
    <div className="counter">
      <button type="button" onClick={() => add(count, setCount, setCarShop, product, setUpdateCarShop)} data-testid={`${index}-product-plus`}>
        <span className="material-icons">
          add
        </span>
      </button>
      <p data-testid={`${index}-product-qtd`}>{count}</p>
      <button type="button" onClick={() => remove(count, setCount, setCarShop, product, setUpdateCarShop)} data-testid={`${index}-product-minus`}>
        <span className="material-icons">
          remove
        </span>
      </button>
    </div>
  );
};

const Product = (props) => {
  const [count, setCount] = useState(0);
  const { product, setCarShop, index, setUpdateCarShop } = props;
  const { id, name, price, volume } = product;

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products[id]) { setCount(products[id].count); }
  }, []);

  return (
    <div className="product_comp">
      <p className="price" data-testid={`${index}-product-price`}>{price.toFixed(2)} R$</p>
      <img
        src="https://oimparcial.com.br/app/uploads/2020/06/cerveja-puro-malte-1024x512.jpg"
        alt="product"
        data-testid={`${index}-product-img`}
      />
      <p className="name" data-testid={`${index}-product-name`}>{name} {volume}ml</p>
      {counter(count, setCount, setCarShop, product, setUpdateCarShop, index)}
    </div>
  );
};

export default Product;