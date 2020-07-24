import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Product from './Product';
import './style.css';

const calculeTotal = (carShop) =>
  Object.keys(carShop)
  .reduce((acc, id) => acc + carShop[id].price * carShop[id].count, 0)
  .toFixed(2);

const products = [
  {id:'1', name: 'cerva1', price: 2.20, volume: 500 },
  {id:'2', name: 'cerva2', price: 2.20, volume: 500 },
  {id:'3', name: 'cerva3', price: 2.20, volume: 500 },
  {id:'4', name: 'cerva4', price: 2.20, volume: 500 },
  {id:'5', name: 'cerva5', price: 2.20, volume: 500 }
];

const Products = () => {
  const [carShop, setCarShop] = useState(JSON.parse(localStorage.getItem('products')) || {});
  const [updateCarShop, setUpdateCarShop] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(calculeTotal(carShop));
    localStorage.setItem('products', JSON.stringify(carShop));
  }, [updateCarShop]);

  return (
    <div className="products_page">
      <Header title="Trybeer" />
      <div className="products">
        {products.map((product, index) => (
          <Product key={product.id} product={product} index={index} setCarShop={setCarShop} setUpdateCarShop={setUpdateCarShop} />
        ))}
      </div>
      <button className="ver_carrinho">
        <span data-testid="checkout-bottom-btn">
          Ver carrinho
        </span>
        <span data-testid="checkout-bottom-btn-value">
          {total}
        </span>
      </button>
    </div>
  );
};

export default Products;