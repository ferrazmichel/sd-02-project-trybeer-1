const deleteProductFromCarShop = (productId) => {
  const products = JSON.parse(localStorage.getItem("products")) || {};

  const { [productId]: _deletedProduct, ...othersProducts } = products;

  localStorage.setItem("products", JSON.stringify(othersProducts));
};

const updateCarShop = ({ count, product }) => {
  const products = JSON.parse(localStorage.getItem("products")) || {};

  const { id } = product;

  const currentProduct = products[id] || product;

  const updateProducts = {
    ...products,
    [id]: { ...currentProduct, count },
  };

  localStorage.setItem("products", JSON.stringify(updateProducts));
};

const add = ({ count, setCount, product, setUpdate }) => {
  const updateCount = count + 1;

  setCount(updateCount);

  updateCarShop({ product, count: updateCount });

  setUpdate((update) => !update);
};

const remove = ({ count, setCount, product, setUpdate }) => {
  if (count === 0) return;

  const updateCount = count - 1;

  setCount(updateCount);

  setUpdate((update) => !update);

  if (updateCount === 0) {
    return deleteProductFromCarShop(product.id);
  }

  if (updateCount > 0) {
    updateCarShop({ product, count: updateCount });
  }
};

const setCurrentCount = ({ id, setCount }) => {
  const products = JSON.parse(localStorage.getItem("products") || "{}");

  if (products[id]) {
    setCount(products[id].count);
  }
};

export { add, remove, setCurrentCount };
