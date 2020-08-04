const { orders, products } = require('../models');

const list = async (id) =>
  orders.list({
    key: 'user_id',
    value: id,
  });

const details = async (id) => {
  const orderDetails = await orders.list({
    key: 'id',
    value: id,
  });

  const allProducts = await orders.details(id);
  console.log('allProducts: ', allProducts)
  const productsId = allProducts.map(({ productId }) => productId);

  const productsDetails = await products.find(productsId);

  const productsWithQuantity = productsDetails
    .map((product) => ({
      ...product, quantity: allProducts
        .find(({ productId }) => productId === product.id).quantity
    }));

  return {
    ...orderDetails[0],
    products: productsWithQuantity,
  };
};

const update = async (id) =>
  orders.update(id);

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
  update,
};
