import React, { useEffect, useState } from "react";

import Header from '../../../components/Header';
import dateFormat from '../../../services/DateFormat';
import { getOrder } from '../../../services/orders';
import OrderProducts from '../../../components/OrderProducts';
import "./style.css";


const Order = (props) => {
  const { id } = props.match.params;
  const [order, setOrder] = useState({ orderDate: '', totalPrice: 0 });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getOrder(id)
      .then(({ data }) => {
        setOrder(data);
        setProducts(data.products);
      });
  }, []);

  return (
    <div className="order_page">
      <Header title="Detalhes do pedido" />
      <div className="margin">
        <div className="header">
          <p>Pedido <span data-testid="order-number">{order.orderId}</span></p>
          <p data-testid="order-date">{dateFormat(order.orderDate)}</p>
        </div>
        <OrderProducts products={products} />
        <div className="total">
          <strong>Total: R$ <span data-testid="order-total-value">{order.totalPrice}</span></strong>
        </div>
      </div>
    </div>
  );
};

export default Order;
