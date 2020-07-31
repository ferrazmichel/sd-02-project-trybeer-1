const { sales } = require('../services');

const postSale = async (req, res) => {
  res.status(200).json(true);
};

module.exports = {
  postSale,
};
