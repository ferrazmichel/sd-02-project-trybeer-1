import validate from "../services/validate";
import { postData } from "../services/Request";

const handleField = ({ field, value, callback }) => {
  const error = validate({ field, value });

  if (!error) {
    callback({ value, error: null });
  } else {
    callback({ value, error: error.message });
  }
};

const postUser = async (body) => postData({ endpoint: URL, body });

async function handleSubmit({ event, body, history }) {
  event.preventDefault();

  await postUser(body);

  history.push(`home/${body.role}`);
};

export { handleField, handleSubmit };
