const { orders, products } = require('../models');


const list = async (id) => orders.list({
  key: 'user_id',
  value: id,
});

const details = async (id) => {
  const order = await orders.list({
    key: 'id',
    value: id,
  })
  const details = await orders.details(id);
  const allProductsIds = details.map((products) => products.productId)
  const productName = await products.find(allProductsIds)
  console.log('productName: ', productName)
}

const insert = async ({ userId, orderDate, totalPrice, products, address, number }) => {
  const insertOrders = await orders.insert({ userId, orderDate, totalPrice, address, number });

  return orders.insertOrdersProducts({ orderId: insertOrders, products });
};

module.exports = {
  list,
  insert,
  details,
};