import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { handleField, handleSubmit } from "./service";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState({ value: null, error: null });
  const [password, setPassword] = useState({ value: null, error: null });

  return (
    <section className="box box60-90 flex-column flex-font">
      <Form className="box box90 flex-column">
        <Form.Group className="box box60-80-90 flex-column">
          <Form.Control
            data-testid="email-input"
            isInvalid={email.error}
            isValid={!email.error && email.value}
            onChange={(e) =>
              handleField({
                field: "email",
                value: e.target.value,
                callback: setEmail,
              })
            }
            placeholder="e-mail"
            required="required"
            type="email"
          />
          <Form.Control.Feedback
            as="p"
            data-testid="email-invalid"
            style={{ display: !email.error ? "none" : "block" }}
            type="invalid"
          >
            {email.error}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="box box60-80-90 flex-column">
          <Form.Control
            data-testid="password-input"
            isInvalid={password.error}
            isValid={!password.error && password.value}
            onChange={(e) => {
              handleField({
                field: "password",
                value: e.target.value,
                callback: setPassword,
              });
            }}
            placeholder="password"
            required="required"
            type="password"
          />
          <Form.Control.Feedback
            as="p"
            data-testid="password-invalid"
            style={{ display: !password.error ? "none" : "block" }}
            type="invalid"
          >
            {password.error}
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
      <Button
        className="box box40"
        data-testid="login-submit-btn"
        disabled={
          email.error || !email.value || password.error || !password.value
        }
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
