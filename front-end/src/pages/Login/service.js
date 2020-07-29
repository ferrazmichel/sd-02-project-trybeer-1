import { postData } from "../../services/Request";

const URL = "http://localhost:3001/users/login";

const getUserAndSaveToken = async (body) => {
  const data = await postData({
    endpoint: URL,
    body,
  });
  console.log(data);
  if (data.error) {
    return console.log(data.error);
  }

  localStorage.setItem("token", data.data.token);

  return { user: data.data.user };
};

async function handleSubmit({ event, body, history }) {
  event.preventDefault();

  const { user } = await getUserAndSaveToken(body);

  if (user) {
    history.push(`/home/${user.role}`);
  }
}

export { handleSubmit };
