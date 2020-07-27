import validate from "./validate";

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

function handleSubmit({ event, body, history }) {
  event.preventDefault();
  console.log(event);
  console.log(body);
  // setLocalStorage(email);
  // history.push("/recipes/meals");
}

function setLocalStorage(email) {
  localStorage.setItem("user", JSON.stringify({ email: email.value }));
  localStorage.setItem(
    "recipe-status",
    JSON.stringify({ meals: null, drinks: null })
  );
  localStorage.setItem(
    "favorites-recipes",
    JSON.stringify({ meals: null, drinks: null })
  );
}

export { handleConfirm, handleField, handleRole, handleSubmit };
