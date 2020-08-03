const { orders } = require('../models');

const list = async (id) => orders.list(id);

const details = async (id) => orders.details(id);

const insert = async ({ userId, orderDate, totalPrice, quantity }) => {
  const insertOrders = await orders.insert({ userId, orderDate, totalPrice, quantity });

}

module.exports = {
  list,
  insert,
  details,
};