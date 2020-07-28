const { products } = require("../services");

const getAll = async (_req, res) => {
  const getProducts = await products.getAll();

  res.status(200).json(getProducts);
};

module.exports = {
  getAll,
};
