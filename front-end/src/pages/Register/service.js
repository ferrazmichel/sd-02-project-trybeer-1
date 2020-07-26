function handleConfirm({ value, setConfirm, password }) {
  const validFormat = value.match(/^.*(.*\d){6,}/) ? true : false;
  const matchPassword = value === password;
  const valid = validFormat && matchPassword;

  setConfirm({ valid, value });
}

function handleEmail({ value, setEmail }) {
  const valid = value.match(/\S+@\S+\.\S+/) ? true : false;

  setEmail({ valid, value });
}

function handleName({ value, setName }) {
  const validFormat = value.match(/^[^\s][a-zA-Z\s]*[a-zA-z]$/) ? true : false;
  const validLenght = value.length >= 12;
  const valid = validFormat && validLenght;

  setName({ valid, value });
}

function handlePassword({ value, setPassword }) {
  const valid = value.match(/^.*(.*\d){6,}/) ? true : false;

  setPassword({ valid, value });
}

function handleRole({ value, setRole }) {
  if (value) {
    setRole("admin");
  } else {
    setRole("client");
  }
}

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

export {
  handleConfirm,
  handleEmail,
  handleName,
  handlePassword,
  handleRole,
  handleSubmit,
};
