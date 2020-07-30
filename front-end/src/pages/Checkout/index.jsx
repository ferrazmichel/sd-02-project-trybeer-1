import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { postData } from '../../services/Request';
import Message from '../../components/Message';

const URL = 'http://localhost:3001/sales/checkout';
const getLocalStorage = () => Object.values(JSON.parse(localStorage.getItem('products')));

const formatBrl = (value) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });


const Checkout = () => {
  const [total, setTotal] = useState(0);
  const [street, setStreet] = useState('');
  const [homeNumber, setHomeNumber] = useState('');
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    return postData({ endpoint: URL, body: { products, adress: { street, homeNumber } } })
      .catch((error) => setError(error));
  };

  useEffect(() => {
    setProducts(getLocalStorage()
      .map((product) => ({ ...product, total: product.count * product.price })))
  }, [])

  if (total === 0 && products.length > 0) setTotal(products.reduce((acc, curr) => acc + curr.total, 0));
  
  return (
    <React.Fragment>
      <Header title="Finalizar Pedido" />
      {error && <Message message={error} type="ALERT" />}
      <div>
        <div>
          <h3>Produtos</h3>
          {
            products.map((product, index) => (
              <div key={JSON.stringify(product)}>
                <p data-testid={`${index}-product-qtd-input`} >{product.count}</p>
                <p data-testid={`${index}-product-name`} >{product.product}</p>
                <p data-testid={`${index}-product-total-value`}>{formatBrl(product.total)}</p>
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
              disabled={!(street && homeNumber) && total > 0}
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
