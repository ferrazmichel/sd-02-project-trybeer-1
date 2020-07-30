import { postData } from "../../services/Request";

const URL = "http://localhost:3001/users/login";

const getUserAndSaveToken = async (body) => {
  const { data, error } = await postData({
    endpoint: URL,
    body,
  });

  if (error) {
    console.error(error);
    return { user: null };
  }

  localStorage.setItem("token", data.token);

  return { user: data.user };
};

async function handleSubmit({ event, body, history }) {
  event.preventDefault();

  const { user } = await getUserAndSaveToken(body);

  if (user) {
    history.push(`/home/${user.role}`);
  }
}

export { handleSubmit };
