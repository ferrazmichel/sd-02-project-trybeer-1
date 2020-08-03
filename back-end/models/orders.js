const { connection } = require('./connection');

const getAllSales = async () => {
  const session = await connection();
  const result = await session.sql(
    `SELECT id, total_price, delivery_address, delivery_number, status
    FROM sales;`,
  )
    .execute()
    .then((results) => results.fetchAll())
    .then((sales) => sales.map(
      ([id, totalPrice, deliveryAddress, deliveryNumber, status]) =>
        ({ saleId: id, totalPrice, deliveryAddress, deliveryNumber, status }),
    ));
  return result;
};

const list = async (id) =>
  connection()
    .then((db) =>
      db
        .getTable('orders')
        .select(['id', 'user_id', 'order_date', 'total_price'])
        .where(`user_id = :${id}`)
        .bind(id)
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
        .where(`order_id = :${id}`)
        .bind(id)
        .execute(),
    )
    .then((arrayOrders) =>
      arrayOrders.map(([orderId, userId, orderDate, totalPrice]) => ({
        orderId,
        userId,
        orderDate,
        totalPrice,
      })),
    );

module.exports = {
  list,
  details,
};