const { connection } = require("./connection");

const find = async ({ key, value }) =>
  connection()
    .then((db) =>
      db
        .getTable("users")
        .select(["id", "name", "email", "password", "role"])
        .where(`${key} = :${key}`)
        .bind(key, value)
        .execute()
    )
    .then((results) => results.fetchAll())
    .then((user) => user[0]);

module.exports = {
  find,
};
