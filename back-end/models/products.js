const { connection } = require('./connection');

const getAll = async () => {
  const products = await connection()
    .then((db) =>
      db
        .getTable('products')
        .select(['id', 'product', 'price', 'volume'])
        .execute(),
    )
    .then((results) => results.fetchAll())
    .then((products) =>
      products.map(([id, product, price, volume]) => ({
        id, product, price, volume
      })),
    );

  if (!products) return null

  return products;
};

module.exports = {
  getAll,
};
