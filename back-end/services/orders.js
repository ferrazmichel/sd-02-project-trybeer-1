const { orders } = require('../models');

const list = async (id) => orders.list(id);

const details = async (id) => orders.details(id);

const insert = async ({ userId, orderDate, totalPrice, products, address, number }) => {
  const insertOrders = await orders.insert({ userId, orderDate, totalPrice, address, number });

  return orders.insertOrdersProducts({orderId: insertOrders, products});
};

module.exports = {
  list,
  insert,
  details,
};