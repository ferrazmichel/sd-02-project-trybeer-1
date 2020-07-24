import React, { useState } from 'react';

import './style.css';

const add = (setCount) => {
  setCount(curr => curr + 1);
};

const remove = (count, setCount) => {
  if (count > 0) {
    setCount(curr => curr - 1);
  }
};

const Product = (props) => {
  const [count, setCount] = useState(0);
  const { name, price, volume } = props.product;
  return (
    <div className="product_comp">
      <p className="price">{price.toFixed(2)} R$</p>
      <img src="https://oimparcial.com.br/app/uploads/2020/06/cerveja-puro-malte-1024x512.jpg" alt="product" />
      <p className="name">{name} {volume}ml</p>
      <div className="counter">
        <button type="button" onClick={() => add(setCount)}>
          <span className="material-icons">
            add
          </span>
        </button>
        <p>{count}</p>
        <button type="button" onClick={() => remove(count, setCount)}>
          <span className="material-icons">
            remove
          </span>
        </button>
      </div>
    </div>
  );
};

export default Product;