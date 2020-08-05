import React, { useEffect, useState, useContext } from 'react';
import { getData } from '../../../services/Request';
import { Context } from '../../../context';
import Card from './components/Card';
import { Link } from 'react-router-dom';
import './style.css';
import Menu from '../Menu';

const URL = 'http://localhost:3001/orders';

const Home = () => {
  const [orders, setOrders] = useState([]);
  const { setMessage } = useContext(Context);

  useEffect(() => {
    getData(URL)
      .then(({ data }) => setOrders(data.orders.sort((a, b) => a.status === 'pendente' ? -1 : 1)))
      .catch(({ error }) => setMessage({ value: error.status, type: 'ALERT' }));
  }, []);

  return (
    <React.Fragment>
      <div className="order_admin">
        <Menu />
        <div className="contain_page">
          <h1>Pedidos</h1>
          <div className="contain_cards">
            {orders.map((order, index) => (
              <Link
                className="card_link"
                style={{ textDecoration: 'none' }}
                to={`/admin/orders/${order.orderId}`} key={JSON.stringify(order)}
              >
                <Card {...{ ...order, index }} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default Home;
