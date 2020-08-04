import React, { useEffect, useState } from "react";
import Menu from '../Menu';
import { getOrder } from './service';
import "./style.css";


const Order = () => {
  const [order, setOrder] = useState({ status: '', number: 0, orderDate: '' });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getOrder(1).then(({ data }) => {
      const { products, ...order } = data;
      setOrder(order);
      setProducts(products);
      console.log(order)
    });
  }, []);

  return (
    <div className="order_admin">
      <Menu />
      <div className="container">
        <p>Pedido {order.number} - {order.status} {order.orderDate}</p>
        <div className="orders">
          {products.map(({ id, name, price, volume }) => (
            <div className="order" key={id}>
              <p>{name} {volume}ml</p>
              <p>R$ {price}</p>
            </div>
          ))}
        </div>
        <button type="button">Marcar como entregue</button>
      </div>
    </div>
  );
};

export default Order;

// {
//   "order": {
//       "orderId",
//       "userId",
//       "orderDate":,
//       "totalPrice",
//       "address",
//       "number",
//       "status",
//       "products": [
//           {
//               "id",
//               "name",
//               "price",
//               "volume",
//               "urlImage",
//               "quantity",
//           },
//       ]
//   }
// }
