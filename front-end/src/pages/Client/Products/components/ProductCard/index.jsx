import React, { useState, useEffect } from "react";
import { setCurrentCount } from "./service";
import Counter from "./Counter";
import "./style.css";

const Product = ({ index, product, setUpdate }) => {
  const [count, setCount] = useState(0);

  const { id, name, price, volume, urlImage } = product;

  useEffect(() => {
    setCurrentCount({ id, setCount });
  }, []);

  return (
    <div className="product_comp">
      <p className="price" data-testid={`${index}-product-price`}>
        R$ {price.toFixed(2)}
      </p>
      <img src={urlImage} alt="product" data-testid={`${index}-product-img`} />
      <p className="name" data-testid={`${index}-product-name`}>
        {name} {volume}ml
      </p>
      <Counter
        count={count}
        index={index}
        product={product}
        setCount={setCount}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default Product;
