const { products } = require('../models');

const getAll = async () => {
  const data = await products.getAll();

  return data;
};

module.exports = {
  getAll,
};
