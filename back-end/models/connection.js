const mysqlx = require('@mysql/xdevapi');

const getSession = () =>
  mysqlx.getSession({
    user: 'root',
    password: 'password',
    host: 'localhost',
    port: 33060,
    schema: 'Trybeer',
  });

const connection = async () =>
  getSession()
    .then((session) => session.getSchema('Trybeer'))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

module.exports = {
  connection,
  getSession,
};
