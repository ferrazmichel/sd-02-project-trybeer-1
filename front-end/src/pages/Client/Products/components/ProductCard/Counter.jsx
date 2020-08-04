import React from "react";
import { add, remove } from "./service";
import "./style.css";

const Counter = ({ count, index, product, setCount, setUpdate }) => {
  return (
    <div className="counter">
      <button
        data-testid={`${index}-product-plus`}
        onClick={() => add({ count, setCount, product, setUpdate })}
        type="button"
      >
        <span className="material-icons add-btn">add</span>
      </button>
      <p data-testid={`${index}-product-qtd`}>{count}</p>
      <button
        data-testid={`${index}-product-minus`}
        onClick={() => remove({ count, setCount, product, setUpdate })}
        type="button"
      >
        <span className="material-icons remove-btn">remove</span>
      </button>
    </div>
  );
};

export default Counter;
