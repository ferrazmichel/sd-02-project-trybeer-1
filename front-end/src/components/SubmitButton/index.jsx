import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "./style.css";

const SubmitButton = ({
  body,
  isDisabled,
  handleSubmit,
  label,
  testId,
  setError,
}) => {
  const history = useHistory();

  return (
    <Button
      className="submit_button"
      data-testid={testId}
      disabled={isDisabled}
      onClick={(event) => handleSubmit({ event, body, history, setError })}
      type="submit"
      variant={isDisabled ? "outline-danger" : "outline-success"}
    >
      {label}
    </Button>
  );
};

export default SubmitButton;
