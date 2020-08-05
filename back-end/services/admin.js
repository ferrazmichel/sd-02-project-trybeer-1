const { admin, orders, products } = require('../models');

const list = async () =>
  admin.list();

const details = async (id) => {
  const adminOrderDetails = await orders.list({
    key: 'id',
    value: id,
  });

  const allProducts = await orders.details(id);
  const productsId = allProducts.map(({ productId }) => productId);

  const productsDetails = await products.find(productsId);

  const productsWithQuantity = productsDetails
    .map((product) => ({
      ...product,
      quantity: allProducts
        .find(({ productId }) => productId === product.id).quantity,
    }));

  return {
    ...adminOrderDetails[0],
    products: productsWithQuantity,
  };
};

module.exports = {
  list,
  details,
};
