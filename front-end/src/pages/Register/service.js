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

export { handleConfirm, handleRole };
