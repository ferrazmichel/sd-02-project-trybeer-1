import React, { useEffect, useState, useContext } from "react";
import { Context } from '../../../context';
import Message from '../../../components/Message';
import Menu from '../Menu';
import { getOrder, updateOrder } from '../../../services/orders';
import orderProductsRender from '../../../components/OrderProducts';
import "./style.css";


const marcar = (id, setMessage) => {
  updateOrder(id)
    .then(({ data: { message } }) =>
      setMessage({ value: message, type: 'SUCCESS' }));
};

const ordersRender = (products, order) => {
  return (
    <div className="orders">
      {orderProductsRender(products)}
      <div className="total">
        <strong data-testid="order-total-value">Total: R$ {order.totalPrice.toFixed(2)}</strong>
      </div>
    </div>
  )
}

const Order = (props) => {
  const [order, setOrder] = useState({ status: '', number: 0, orderDate: '', totalPrice: 1 });
  const [products, setProducts] = useState([]);
  const { id } = props.match.params;
  const { setMessage } = useContext(Context);

  useEffect(() => {
    getOrder(id).then(({ data }) => {
      const { products, ...order } = data;
      setOrder(order);
      setProducts(products);
    });
  }, []);

  return (
    <div className="order_admin">
      <Menu />
      <Message infinity />
      <div className="container">
        <p>Pedido <span data-testid="order-number">001</span>
        <span data-testid="order-status"> - {order.status}</span> {order.orderDate}</p>
        {ordersRender(products, order)}
        <button
          type="button"
          onClick={() => marcar(id, setMessage)}
          data-testid="mark-as-delivered-btn"
        >
          Marcar como entregue
        </button>
      </div>
    </div>
  );
};

export default Order;
