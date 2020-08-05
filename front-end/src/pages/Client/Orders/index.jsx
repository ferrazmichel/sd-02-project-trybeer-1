import React, { useEffect } from "react";
import Header from '../../../components/Header';
import "./style.css";

const orders = [
  { id: '1', address: 'Joao de Deus', date: '12/03/2020', total: 22.5 },
  { id: '2', address: 'Joao de Deus', date: '12/03/2020', total: 22.5 }
];

const Orders = () => {
  useEffect(() => {

  }, []);

  return (
    <div className="orders_page">
      <Header title="Meus Pedidos" />
      <div className="orders">
        {orders.map((order, index) => {
        const { id, date, total } = order;
        return (
          <div className="order" key={id}>
            <div className="header">
              <strong className="pedido" data-testid={`${index}-order-number`}>Pedido {index}</strong>
              <p className="date" data-testid={`${index}-order-number`}>{date}</p>
            </div>
            <strong data-testid={`${index}-order-total-value`}>R$ {total}</strong>
          </div>
        )})}
      </div>
    </div>
  );
};

export default Orders;
