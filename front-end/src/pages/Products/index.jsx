import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Product from "./Product";
import { getProducts } from "./service";
import "./style.css";


const calculeTotal = () => {
  const products = JSON.parse(localStorage.getItem("products") || "{}");

  return Object.keys(products)
    .reduce((acc, id) => acc + products[id].price * products[id].count, 0)
    .toFixed(2);
};

const buttonRender = ({ total, history }) => {
  return (
    <button className="ver_carrinho" onClick={() => history.push("/checkout")}>
      <span data-testid="checkout-bottom-btn">Ver carrinho</span>
      <span data-testid="checkout-bottom-btn-value">{total}</span>
    </button>
  );
};

const render = ({ history, products, setUpdate, total, update }) => {
  return (
    <React.Fragment>
      <Header title="Trybeer" />
      <div className="products">
        {products.map((product, index) => (
          <Product
            index={index}
            key={product.id}
            product={product}
            setUpdate={setUpdate}
            update={update}
          />
        ))}
      </div>
      {buttonRender({ total, history })}
    </React.Fragment>
  );
};


const Products = () => {
  const [products, setProducts] = useState([]);

  const [total, setTotal] = useState(0);

  const [update, setUpdate] = useState(false);

  const history = useHistory();

  useEffect(() => {
    getProducts().then((res) => {
      console.log(res)
      setProducts(res);
    })
    setTotal(calculeTotal());
  }, [update]);

  return (
    <div className="products_page">
      {render({ history, products, setUpdate, total, update })}
    </div>
  );
};

export default Products;
