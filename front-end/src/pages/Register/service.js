import validate from "./validate";
import { postData } from "../../services/Request";

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

const handleField = ({ field, value, callback }) => {
  const error = validate({ field, value });

  if (!error) {
    callback({ value, error: null });
  } else {
    callback({ value, error: error.message });
  }
};

const handleRole = ({ value, setRole }) => {
  if (value) {
    setRole("admin");
  } else {
    setRole("client");
  }
};

const URL = "http://localhost:3001/users/register";

const postUser = async (body) => {
  const data = await postData({ endpoint: URL, body });
  console.log(data);
  // if (data.error) {
  //   console.log(data.error);
  // }
};

async function handleSubmit({ event, body, history }) {
  event.preventDefault();

  await postUser(body);

  history.push(`home/${body.role}`);
}

export { handleConfirm, handleField, handleRole, handleSubmit };
