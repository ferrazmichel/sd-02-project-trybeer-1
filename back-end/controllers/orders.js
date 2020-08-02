const { orders } = require('../services');

const list = async (_req, res) => {
  const ordersList = await orders.list();

  res.status(200).json({ ordersList });
};

const insert = async (req, res) => {
  const { userId, orderDate, totalPrice } = req.body;
  const insertedOrder = await orders.insert({ userId, orderDate, totalPrice });

  res.status(201).json({ insertedOrder });
};

module.exports = {
  list,
  insert,
};
