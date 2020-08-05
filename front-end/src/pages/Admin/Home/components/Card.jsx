import React from 'react';
const formatBrl = (value) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

const Card = ({ address, number, orderId, status, totalPrice, index }) => (
  <div className="card_container">
    <h3 data-testid={`${index}-order-number`}>Pedido:{orderId}</h3>
    <p data-testid={`${index}-order-address`}>{`${address}, ${number}`}</p>
    <p data-testid={`${index}-order-total-value`}>{formatBrl(totalPrice)}</p>
    <label>{status}</label>
  </div>
);

export default Card;
