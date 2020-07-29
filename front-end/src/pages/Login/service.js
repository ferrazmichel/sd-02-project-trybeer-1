import validate from "./validate";
import { postData } from "../../services/Request";

const handleField = ({ field, value, callback }) => {
  const error = validate({ field, value });

  if (!error) {
    callback({ value, error: null });
  } else {
    callback({ value, error: error.message });
  }
};

const URL = "http://localhost:3001/users/login";

const getUserAndSaveToken = async (body) => {
  const data = await postData({
    endpoint: URL,
    body,
  });

  if (data.error) {
    return console.log(data.error);
  }

  localStorage.setItem("token", data.data.token);

  return { user: data.data.user };
};

async function handleSubmit({ event, body, history }) {
  event.preventDefault();

  const { user } = await getUserAndSaveToken(body);

  history.push(`/home/${user.role}`);
}

export { handleField, handleSubmit };
