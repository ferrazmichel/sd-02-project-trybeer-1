import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const ShopCartButton = ({ total }) => {
  const history = useHistory();

  return (
    <button className="ver_carrinho" onClick={() => history.push("/checkout")}>
      <span data-testid="checkout-bottom-btn">Ver carrinho</span>
      <span data-testid="checkout-bottom-btn-value">R$ {total}</span>
    </button>
  );
};

export default ShopCartButton;
