import { postData } from "../../services/Request";

const URL = "http://localhost:3001/users/register";

const userRoutes = {
  admin: "/home/admin",
  client: "/products",
};

const handleConfirm = ({ value, password, callback }) => {
  const validFormat = value.match(/^.*(.*\d){6,}/);
  const matchPassword = value === password;

  if (validFormat && matchPassword) {
    callback({ value, error: null });
  } else {
    callback({
      value,
      error: "Don't match password and/or invalid format",
    });
  }
};

const postUser = async (body) => {
  const { error } = await postData({ endpoint: URL, body });

  console.error(error);

  return { error };
};

async function handleSubmit({ event, body, history, setError }) {
  event.preventDefault();

  const { error } = await postUser(body);

  if (error) {
    setError(error.message);

    return;
  }

  history.push(userRoutes[body.role]);
}

export { handleConfirm, handleSubmit };
