const { connection } = require('./connection');

const list = async ({ key, value }) =>
  connection()
    .then((db) =>
      db
        .getTable('orders')
        .select(['id', 'user_id', 'order_date', 'total_price'])
        .where(`${key} = :${key}`)
        .bind(key, value)
        .execute(),
    )
    .then((results) => results.fetchAll())
    .then((arrayOrders) =>
      arrayOrders.map(([orderId, userId, orderDate, totalPrice]) => ({
        orderId,
        userId,
        orderDate,
        totalPrice,
      })),
    );

const details = async (id) =>
  connection()
    .then((db) =>
      db
        .getTable('orders_products')
        .select(['order_id', 'product_id', 'quantity'])
        .where('order_id = :id')
        .bind('id', id)
        .execute()
    )
    .then((results) => results.fetchAll())
    .then((arrayOrders) =>
      arrayOrders.map(([orderId, productId, quantity]) => ({
        orderId,
        productId,
        quantity,
      })),
    );

const insert = async ({ userId, orderDate, totalPrice, address, number }) =>
  connection()
    .then((db) =>
      db
        .getTable('orders')
        .insert(['user_id', 'order_date', 'total_price', 'address', 'number'])
        .values(userId, orderDate, totalPrice, address, number)
        .execute(),
    ).then((query) => query.getAutoIncrementValue());

const insertOrdersProducts = async ({ orderId, products }) =>
  connection()
    .then((db) =>
      db
        .getTable('orders_products')
        .insert(['order_id', 'product_id', 'quantity']))
        .then((query) => {
          products.forEach(({ id, count }) => query.values(orderId, id, count));
          return query.execute();
        })

module.exports = {
        list,
        details,
        insert,
        insertOrdersProducts
      };