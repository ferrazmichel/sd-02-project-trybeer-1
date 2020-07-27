import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  handleConfirm,
  handleField,
  handleRole,
  handleSubmit,
} from "./service";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState({ email: null, error: null });
  const [name, setName] = useState({ name: null, error: null });
  const [password, setPassword] = useState({ password: null, error: null });
  const [confirm, setConfirm] = useState({ confirm: null, error: null });
  const [role, setRole] = useState("client");

  return (
    <section className="box box60-90 flex-column flex-font">
      <Form className="box box90 flex-column">
        <Form.Group className="box box60-80-90 flex-column">
          <Form.Control
            data-testid="name-input"
            isInvalid={name.error}
            isValid={!name.error && name.name}
            onChange={(e) =>
              handleField({
                field: "name",
                value: e.target.value,
                callback: setName,
              })
            }
            placeholder="name"
            required="required"
            type="string"
          />
          <Form.Control.Feedback
            as="p"
            data-testid="name-invalid"
            style={{ display: !name.error ? "none" : "block" }}
            type="invalid"
          >
            {name.error}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="box box60-80-90 flex-column">
          <Form.Control
            data-testid="email-input"
            isInvalid={email.error}
            isValid={!email.error && email.email}
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
            isValid={!password.error && password.password}
            onChange={(e) => {
              handleField({
                field: "password",
                value: e.target.value,
                callback: setPassword,
              });
              confirm.confirm &&
                handleConfirm({
                  value: confirm.confirm,
                  callback: setConfirm,
                  password: e.target.value,
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
        <Form.Group className="box box60-80-90 flex-column">
          <Form.Control
            data-testid="confirm-input"
            isInvalid={confirm.error}
            isValid={!confirm.error && confirm.confirm}
            onChange={(e) => {
              handleConfirm({
                value: e.target.value,
                callback: setConfirm,
                password: password.password,
              });
            }}
            placeholder="confirm password"
            required="required"
            type="password"
          />
          <Form.Control.Feedback
            as="p"
            data-testid="confirm-invalid"
            style={{ display: !confirm.error ? "none" : "block" }}
            type="invalid"
          >
            {confirm.error}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="box box60-80-90 flex-column">
          <Form.Check
            data-testid="checkbox-input"
            type="checkbox"
            label="Quero vender"
            onChange={(e) => handleRole({ value: e.target.checked, setRole })}
          />
        </Form.Group>
      </Form>
      <Button
        className="box box40"
        data-testid="register-submit-btn"
        disabled={
          confirm.error ||
          !confirm.confirm ||
          email.error ||
          !email.email ||
          name.error ||
          !name.name ||
          password.error ||
          !password.password
        }
        onClick={(event) =>
          handleSubmit({
            event,
            body: {
              confirm: confirm.confirm,
              email: email.email,
              name: name.name,
              password: password.password,
              role,
            },
            history,
          })
        }
        type="submit"
        variant="outline-danger"
      >
        Cadastrar
      </Button>
    </section>
  );
}

export default Register;
