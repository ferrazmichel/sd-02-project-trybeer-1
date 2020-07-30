const { sales } = require('../services');

const postSale = async (req, res) => {
  const data = await sales.postSale(req.user, req.body);

  // res.status(200).json({ products: data });
};

module.exports = {
  postSale,
};
