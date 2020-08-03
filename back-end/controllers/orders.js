const { orders } = require('../services');

const list = async (req, res) => {
  const orders = await orders.list(req.user.id);

  res.status(200).json({ orders });
};

const details = async (req, res) => {
  const order = await orders.details(req.params.id);

  res.status(200).json({ order });
};

const insert = async (req, res) => {
  const { orderDate, totalPrice, address, number, products } = req.body;
  const { id: userId } = req.user;

  await orders.insert({ userId, orderDate, totalPrice, address, number, products });

  res.status(201).json({ message: 'Compra concluída!' });
};

module.exports = {
  list,
  insert,
  details,
};
