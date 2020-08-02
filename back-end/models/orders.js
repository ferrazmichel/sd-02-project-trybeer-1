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

const list = async () => {
  const listOrders = await connection()
    .then((db) =>
      db
        .getTable('orders')
        .select(['id', 'user_id', 'order_date', 'total_price'])
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

  if (!listOrders) return null;

  return listOrders;
};

module.exports = {
  list,
};