import React, { useEffect } from "react";
import Menu from '../Menu';
import { getOrder } from './service';
import "./style.css";

const orders = [
  { id: 'dde22r3S', product: 'cerva1', price: 12.5, volume: 350 },
  { id: 'dd7y7e3r3S', product: 'cerva2', price: 20.5, volume: 550 },
];

const Order = () => {

  useEffect(() => {
    getOrder().then(() => {

    });
  }, []);

  return (
    <div className="order_admin">
      <Menu />
      <div className="container">
        <p>Pedido 001 - Pendente</p>
        <div className="orders">
          {orders.map((order) => (
            <div className="order" key={order.id}>
              <p>{order.product} {order.volume}ml</p>
              <p>R$ {order.price}</p>
            </div>
          ))}
        </div>
        <button type="button">Marcar como entregue</button>
      </div>
    </div>
  );
};

export default Order;
