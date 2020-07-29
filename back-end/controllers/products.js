const { products } = require("../services");

const getAll = async (_req, res) => {
  const data = await products.getAll();

  res.status(200).json({ products: data });
};

module.exports = {
  getAll,
};
