const { connection } = require('./connection');

const find = async ({ key, value }) => {
  const user = await connection()
    .then((db) =>
      db
        .getTable('users')
        .select(['id', 'name', 'email', 'password', 'role'])
        .where(`${key} = :${key}`)
        .bind(key, value)
        .execute()
    )
    .then((results) => results.fetchAll())
    .then((user) => user[0]);

  if (!user) return null;

  const [id, name, email, password, role] = user;

  return { id, name, email, password, role };
};

const register = async ({ name, email, password, role }) =>
  connection().then((db) =>
    db
      .getTable('users')
      .insert(['name', 'email', 'password', 'role'])
      .values(name, email, password, role)
      .execute()
  );

module.exports = {
  find,
  register,
};
