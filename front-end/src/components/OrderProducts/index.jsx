import React from "react";

const OrderProducts = (props) => {
  const { products } = props;
  return (
    <React.Fragment>
      {products.map(({ id, name, price, volume, quantity }, index) => (
        <div className="order" key={id}>
          <p>
            <span data-testid={`${index}-product-qtd`}>{quantity}</span> -
           <span data-testid={`${index}-product-name`}> {name}</span> {volume}ml
         </p>
          <p>R$ <span data-testid={`${index}-product-total-value`}>{(price * quantity).toFixed(2)}</span></p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default OrderProducts;
