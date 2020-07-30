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

const handleRole = ({ value, setRole }) => {
  if (value) {
    setRole("admin");
  } else {
    setRole("client");
  }
};

const URL = "http://localhost:3001/users/register";

const postUser = async (body) => {
  const { error } = await postData({ endpoint: URL, body });
  console.error(error.message);
  return { error };
};

async function handleSubmit({ event, body, history }) {
  event.preventDefault();

  const { error } = await postUser(body);

  if (!error) {
    history.push(`home/${body.role}`);
  }
}

export { handleConfirm, handleRole, handleSubmit };
