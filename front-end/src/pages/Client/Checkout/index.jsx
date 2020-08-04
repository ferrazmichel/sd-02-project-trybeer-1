import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../../../context";
import { Redirect } from "react-router-dom";
import Header from '../../../components/Header';
import { postSale } from '../../../services/Request';
import Message from '../../../components/Message';
import './style.css';
const URL = 'http://localhost:3001/orders';

const getProducts = () => JSON.parse(localStorage.getItem('products')) || {};

const getLocalStorage = () => Object.values(getProducts());

const formatBrl = (value) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

const removeToLocal = (id) => {
  const products = getProducts();
  delete products[id];
  localStorage.setItem('products', JSON.stringify(products));
}

const Checkout = ({ history }) => {
  const [total, setTotal] = useState(0);
  const [street, setStreet] = useState('');
  const [homeNumber, setHomeNumber] = useState('');
  const [products, setProducts] = useState([]);
  const { message, setMessage } = useContext(Context);
  
  const handleSubmit = async (e) => {
    const date = new Date();
    e.preventDefault();
    return postSale(
      URL,
      {
        products,
        address: street,
        number: homeNumber,
        orderDate: date.toISOString().split('T')[0],
        totalPrice: total,
      })
      .then(() => setMessage({ value: 'Venda realizada com Sucesso', type: 'SUCCESS' }))
      .catch(() => setMessage({ value: 'Não foi possível cadastrar a venda', type: 'ALERT'}));
    };
    
  useEffect(() => {
    setMessage({ value: '', type: '' })
    setProducts(getLocalStorage()
      .map((product) => ({ ...product, total: product.count * product.price })));
  }, []);

  useEffect(() => {
    setTotal(products.reduce((acc, curr) => acc + curr.total, 0));
  }, [products]);

  if (message.type === 'SUCCESS') {
    localStorage.removeItem('products');
    return <Redirect to="/products" />; 
  }
  
  const booleanButton = !(street && homeNumber) || (total <= 0);
  return (
    <React.Fragment>
      <Header title="Finalizar Pedido" />
      {message.type && <Message message={{...message}} />}
      <div className="checkout_container">
        <div className="checkout_container_products">
          <h3>Produtos</h3>
          {
            products.map((product, index) => (
              <div className="products_box" key={JSON.stringify(product)}>
                <div className="product_info"><p data-testid={`${index}-product-qtd-input`} >{product.count}</p></div>
                <div className="product_info"><p data-testid={`${index}-product-name`} >{product.product}</p></div>
                <div className="product_info"><p data-testid={`${index}-product-total-value`}>{formatBrl(product.total)}</p></div>
                <div className="product_info"><button onClick={() => {
                  const newProducts = products.filter((produ) => produ.id !== product.id);
                  setProducts(newProducts);
                  removeToLocal(product.id);
                }}>
                  <span className="material-icons">delete</span>
                </button></div>
              </div>
            ))
          }
          <div className="contain_total"><p className="total_text" data-testid="order-total-value">Total:{formatBrl(total)}</p></div>
        </div>
        <div className="checkout_container_form">
          <form className="checkout_form" onSubmit={(e) => handleSubmit(e)}>
            <h3>Endereço</h3>
            <label htmlFor="street">Rua:</label>
            <input
              data-testid="checkout-street-input"
              value={street} onChange={({ target }) => setStreet(target.value)}
              id="street"
              type="text"
              required
            />
            <label htmlFor="homeNumber">Número da casa:</label>
            <input
              data-testid="checkout-house-number-input"
              value={homeNumber}
              onChange={({ target }) => setHomeNumber(target.value)}
              id="homeNumber"
              type="text"
              required
            />
            <button
              className={`submit_checkout ${booleanButton ? 'red_background' : 'green_background'}`}
              data-testid="checkout-finish-btn"
              type="submit"
              disabled={booleanButton}
            >
              Finalizar Pedido
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Checkout;
