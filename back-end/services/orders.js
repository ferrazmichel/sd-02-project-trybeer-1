const { orders } = require('../models');

const list = async () => orders.list();

const insert = async ({ userId, orderDate, totalPrice }) => orders.insert({ userId, orderDate, totalPrice });

module.exports = {
  list,
  insert,
};