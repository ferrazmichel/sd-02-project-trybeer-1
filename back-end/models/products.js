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

// FALTA FAZER ISSO FUNCIONAR

// const find = async (id) =>
//   connection()
//     .then((db) =>
//       db
//         .getTable('orders_products')
//         .select(['order_id', 'product_id', 'quantity']))
//     .then((query) => {
//       const string = id.reduce((acc, curr, index) => index !== 0 ? `${acc} OR order_id = :id_${curr}` : `order_id = :id_${curr}`, '')
//       console.log('string: ', string)
//       query.where(string)
//       id.forEach((curr) => query.bind(`id_${curr}`, curr))
//       return query.execute();
//     })
//     .then((results) => results.fetchAll())

module.exports = {
  list,
  find,
};
