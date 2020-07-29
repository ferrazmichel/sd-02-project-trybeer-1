require("dotenv").config();

const { users } = require("./models");

const {
  bcrypt: { createHash },
} = require("./services/utils");

const createAdmin = async (body) => {
  const hash = await createHash(body.password);

  await users.register({ ...body, password: hash });

  console.log("User Admin Created!");

  process.exit(1);
};

createAdmin({
  name: "tryber",
  email: "tryber@gmail.com",
  password: "123456",
  role: "admin",
});
