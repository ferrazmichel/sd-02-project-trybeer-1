import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { handleField, handleSubmit } from "./service";

const getField = ({ state, field, callback }) => (
  <Form.Group className="box box60-80-90 flex-column">
    <Form.Control
      data-testid="name-input"
      isInvalid={state.error}
      isValid={!state.error && state.value}
      onChange={(e) =>
        handleField({
          field,
          value: e.target.value,
          callback,
        })
      }
      placeholder={field}
      required="required"
      type="string"
    />
    <Form.Control.Feedback
      as="p"
      data-testid="name-invalid"
      style={{ display: !state.error ? "none" : "block" }}
      type="invalid"
    >
      {state.error}
    </Form.Control.Feedback>
  </Form.Group>
);

const buttonSubmit = ({ email, password, history }) => (
  <Button
    className="box box40"
    data-testid="login-submit-btn"
    disabled={email.error || !email.value || password.error || !password.value}
    onClick={async (event) =>
      await handleSubmit({
        event,
        body: {
          email: email.value,
          password: password.value,
        },
        history,
      })
    }
    type="submit"
    variant="outline-danger"
  >
    Entrar
  </Button>
);

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState({ value: null, error: null });
  const [password, setPassword] = useState({ value: null, error: null });

  return (
    <section className="box box60-90 flex-column flex-font">
      <Form className="box box90 flex-column">
        {getField({ state: email, callback: setEmail, field: "email" })}
        {getField({
          state: password,
          callback: setPassword,
          field: "password",
        })}
      </Form>
      {buttonSubmit({ email, password, history })}
      <Button
        className="box box40"
        data-testid="register-btn"
        onClick={() => history.push("/register")}
        type="button"
        variant="outline-danger"
      >
        Ainda não tenho conta
      </Button>
    </section>
  );
}

export default Login;
