import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Header from '../../../components/Header';
import dateFormat from '../../../services/DateFormat';
import { getOrders } from '../../../services/orders';
import "./style.css";


const details = (history, orderId) => {
  history.push(`orders/${orderId}`);
};

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getOrders()
      .then(({ data }) => setOrders(data.sort((a, b) => b.orderId - a.orderId)))
  }, []);

  return (
    <div className="orders_page">
      <Header title="Meus Pedidos" />
      <div className="orders">
        {orders.map((order, index) => {
          const { orderId, orderDate, totalPrice } = order;
          return (
            <div className="order" key={orderId} onClick={() => details(history, orderId)}>
              <div className="header">
                <strong className="pedido" data-testid={`${index}-order-number`}>Pedido {orderId}</strong>
                <p className="date" data-testid={`${index}-order-date`}>{dateFormat(orderDate)}</p>
              </div>
              <strong data-testid={`${index}-order-total-value`}>R$ {totalPrice.toFixed(2)}</strong>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Orders;
