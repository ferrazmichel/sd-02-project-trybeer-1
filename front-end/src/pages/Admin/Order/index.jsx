import React, { useEffect, useState, useContext } from "react";
import { Context } from '../../../context';
import Message from '../../../components/Message';
import Menu from '../Menu';
import { getOrder, updateOrder } from './service';
import "./style.css";


const marcar = (id, setMessage) => {
  updateOrder(id)
    .then(({ data: { message } }) =>
      setMessage({ value: message, type: 'SUCCESS' }));
};

const ordersRender = (products, order) => {
  return (
    <div className="orders">
      {products.map(({ id, name, price, volume, quantity }, index) => (
        <div className="order" key={id}>
          <p>
            <span data-testid={`${index}-product-qtd`}>{quantity}</span> -
            <span data-testid={`${index}-product-name`}> {name}</span> {volume}ml</p>
          <p>R$ <span data-testid={`${index}-product-total-value`}>{(price * quantity).toFixed(2)}</span></p>
        </div>
      ))}
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
  const { message, setMessage } = useContext(Context);

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
      {message.value && <Message infinity />}
      <div className="container">
        <p>Pedido <span data-testid="order-number">001</span>
          <span data-testid="order-status"> - {order.status}</span> {order.orderDate}</p>
        {ordersRender(products, order)}
        {order.status === 'pendente' &&
          <button
            type="button"
            onClick={() => marcar(id, setMessage)}
            data-testid="mark-as-delivered-btn"
          >
            Marcar como entregue
        </button>}
      </div>
    </div>
  );
};

export default Order;
