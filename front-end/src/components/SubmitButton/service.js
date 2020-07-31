import { postData } from "../../services/Request";

const URL = "http://localhost:3001/users/";

const userRoutes = {
  admin: "/home/admin",
  client: "/products",
};

const getUserAndSaveToken = async ({ body, endpoint }) => {
  const { data, error } = await postData({
    endpoint: `${URL}${endpoint}`,
    body,
  });

  if (error) {
    return { error };
  }

  localStorage.setItem("token", data.token);

  return { user: data.user };
};

async function handleSubmit({ event, body, history, endpoint, setError }) {
  event.preventDefault();

  const { user, error } = await getUserAndSaveToken({ body, endpoint });

  if (error) {
    setError(error.message);
    return;
  }

  if (user) {
    history.push(userRoutes[user.role]);
  }
}

export { handleSubmit };
