import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../context";
import { Header, Message } from "../../../components";
import { ProductCard, ShopCartButton } from "./components";
import { getProducts, calculeTotal } from "./service";
import "./style.css";

const Products = () => {
  const { message, setMessage } = useContext(Context);

  const [products, setProducts] = useState([]);

  const [total, setTotal] = useState(0);

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getProducts().then(({ data, error }) => {
      setProducts(data);
      setMessage({ value: error, type: "ALERT" });
    });
  }, []);

  useEffect(() => {
    setTotal(calculeTotal());
  }, [update]);

  return (
    <div className="products_page">
      {message.value && <Message message={message} infinity />}
      <Header title="Trybeer" />
      <div className="products">
        {products.map((product, index) => (
          <ProductCard
            index={index}
            key={product.id}
            product={product}
            setUpdate={setUpdate}
          />
        ))}
      </div>
      <ShopCartButton total={total} />
    </div>
  );
};

export default Products;
