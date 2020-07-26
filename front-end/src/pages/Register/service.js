function handleConfirm(event, setConfirm, password) {
  const confirm = event.target.value;

  setConfirm({
    valid:
      confirm.match(/^.*(.*\d){6,}/) && event.target.value === password.value,
    value: confirm,
  });
}

function handleEmail(event, setEmail) {
  const email = event.target.value;
  console.log(email.match(/\S+@\S+\.\S+/));
  setEmail({
    valid: email.match(/\S+@\S+\.\S+/),
    value: email,
  });
}

function handleName(event, setName) {
  const name = event.target.value;

  setName({
    valid: name.match(/^[^\s][a-zA-Z\s]*[a-zA-z]$/) && name.length >= 12,
    value: name,
  });
}

function handlePassword(event, setPassword) {
  const password = event.target.value;

  setPassword({
    valid: event.target.value.match(/^.*(.*\d){6,}/),
    value: password,
  });
}

function handleRole(event, setRole) {
  if (event.target.checked) {
    setRole("admin");
  } else {
    setRole("client");
  }
}

function handleSubmit(event, email, history) {
  event.preventDefault();
  setLocalStorage(email);
  history.push("/recipes/meals");
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
