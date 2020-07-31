import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { postSale } from '../../services/Request';
import Message from '../../components/Message';
import { Redirect } from 'react-router-dom';

const URL = 'http://localhost:3001/sales/checkout';

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
  const [message, setMessage] = useState({});
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    return postSale({ endpoint: URL, body: { products, adress: { street, homeNumber } } })
      .then(() => setMessage({ message: 'Venda realizada com Sucesso', type: 'SUCCESS', setError: setMessage }))
      .catch(() => setMessage({ message: 'Não foi possível cadastrar a venda', type: 'ALERT', setError: setMessage }))
  };

  useEffect(() => {
    setRedirect(message.type);
  }, [message])

  useEffect(() => {
    setProducts(getLocalStorage()
      .map((product) => ({ ...product, total: product.count * product.price })))
  }, [])

  useEffect(() => {
    setTotal(products.reduce((acc, curr) => acc + curr.total, 0));
  }, [products])

  if (redirect === 'SUCCESS' && Object.keys(message).length === 0) {
    localStorage.removeItem('products');
    history.push('/products')
  }

  return (
    <React.Fragment>
      <Header title="Finalizar Pedido" />
      {message.type && <Message {...message} />}
      <div>
        <div>
          <h3>Produtos</h3>
          {
            products.map((product, index) => (
              <div key={JSON.stringify(product)}>
                <p data-testid={`${index}-product-qtd-input`} >{product.count}</p>
                <p data-testid={`${index}-product-name`} >{product.product}</p>
                <p data-testid={`${index}-product-total-value`}>{formatBrl(product.total)}</p>
                <button onClick={() => {
                  const newProducts = products.filter((produ) => produ.id !== product.id);
                  setProducts(newProducts);
                  removeToLocal(product.id);
                }}>
                  <span className="material-icons">delete</span>
                </button>
              </div>
            ))
          }
          <p data-testid="order-total-value">Total:{formatBrl(total)}</p>
        </div>
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
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
              data-testid="checkout-finish-btn"
              type="submit"
              disabled={!(street && homeNumber) || (total <= 0)}
            >
              Finalizar Pedido
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
};

export default Checkout;
