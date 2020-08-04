const { orders, products } = require("../models");

const list = async (id) =>
  orders.list({
    key: "user_id",
    value: id,
  });

const details = async (id) => {
  const orderDetails = await orders.list({
    key: "id",
    value: id,
  });

  const allProducts = await orders.details(id);

  const productsId = allProducts.map(({ productId }) => productId);

  const productsDetails = await products.find(productsId);

  return {
    ...orderDetails[0],
    products: [...productsDetails],
  };
};

const insert = async ({
  userId,
  orderDate,
  totalPrice,
  products,
  address,
  number,
}) => {
  const insertOrders = await orders.insert({
    userId,
    orderDate,
    totalPrice,
    address,
    number,
  });

  return orders.insertOrdersProducts({ orderId: insertOrders, products });
};

module.exports = {
  list,
  insert,
  details,
};
