import React from 'react';

import Header from '../../components/Header';
import Product from './Product';
import './style.css';

const Products = () => {
  const products = [
    {name: 'cerva1', price: 2.20, volume: 500 },
    {name: 'cerva2', price: 2.20, volume: 500 },
    {name: 'cerva3', price: 2.20, volume: 500 },
    {name: 'cerva4', price: 2.20, volume: 500 },
    {name: 'cerva5', price: 2.20, volume: 500 }
  ];
  return (
    <div className="products_page">
      <Header title="Trybeer" />
      <div className="products">
        {products.map((product) => (
          <Product key={product.name} product={product} />
        ))}
      </div>
      <button className="ver_carrinho">
        Ver carrinho
      </button>
    </div>
  );
};

export default Products;