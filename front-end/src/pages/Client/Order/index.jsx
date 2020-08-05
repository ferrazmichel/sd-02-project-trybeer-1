import React, { useEffect } from "react";
import Header from '../../../components/Header';
import "./style.css";

const total = 22.5;
const index = 1;
// const products = [
//   { id: 'product1', }
// ];
const date = '12/08/2020';

const Order = (props) => {
  // const { products, date, index, total } = props;
  useEffect(() => {

  }, []);

  return (
    <React.Fragment>
      <Header title="Detalhes do pedido" />
      <div className="order_page">
        <div className="header">
          <p>Pedido {index}</p>
          <p>{date}</p>
        </div>
        <div className="total">
          <strong>Total: R$ {total}</strong>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Order;