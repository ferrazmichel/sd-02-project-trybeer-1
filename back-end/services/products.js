const { products } = require('../models');

const getAll = async () => {
  const getProducts = await products.getAll();
  return getProducts;
};

module.exports = {
  getAll,
};
