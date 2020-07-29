const { connection } = require('./connection');

const list = async () => {
  const products = await connection()
    .then((db) =>
      db
        .getTable('products')
        .select(['id', 'product', 'price', 'volume', 'urlImage'])
        .execute(),
    )
    .then((results) => results.fetchAll())
    .then((arrayProducts) =>
      arrayProducts.map(([id, product, price, volume, urlImage]) => ({
        id,
        product,
        price,
        volume,
        urlImage,
      })),
    );

  if (!products) return null;

  return products;
};

module.exports = {
  list,
};
