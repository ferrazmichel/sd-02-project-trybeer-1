import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { handleSubmit } from "./service";
import "./style.css";

const SubmitButton = ({
  body,
  isDisabled,
  endpoint,
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
      onClick={(event) =>
        handleSubmit({ event, body, history, endpoint, setError })
      }
      type="submit"
      variant={isDisabled ? "outline-danger" : "outline-success"}
    >
      {label}
    </Button>
  );
};

export default SubmitButton;
