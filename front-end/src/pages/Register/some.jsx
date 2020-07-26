import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  handleConfirm,
  handleEmail,
  handleName,
  handlePassword,
  handleRole,
  handleSubmit,
} from "./service";

function Register() {
  const history = useHistory();
  const [confirm, setConfirm] = useState({ valid: false, value: "" });
  const [email, setEmail] = useState({ valid: false, value: "" });
  const [name, setName] = useState({ valid: false, value: "" });
  const [password, setPassword] = useState({ valid: false, value: "" });
  const [role, setRole] = useState("client");

  return (
    <section className="box box60-90 flex-column flex-font">
      <Form className="box box90 flex-column">
        <Form.Group className="box box60-80-90 flex-column">
          <Form.Control
            data-testid="name-input"
            isInvalid={!name.valid}
            isValid={name.valid}
            onChange={(e) => handleName(e, setName)}
            placeholder="name"
            required="required"
            type="string"
          />
          <Form.Control.Feedback
            as="p"
            data-testid="name-invalid"
            style={{ display: name.valid ? "none" : "block" }}
            type="invalid"
          >
            Insira um nome válido
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="box box60-80-90 flex-column">
          <Form.Control
            data-testid="email-input"
            isInvalid={!email.valid}
            isValid={email.valid}
            onChange={(e) => handleEmail(e, setEmail)}
            placeholder="e-mail"
            required="required"
            type="email"
          />
          <Form.Control.Feedback
            as="p"
            data-testid="email-invalid"
            style={{ display: email.valid ? "none" : "block" }}
            type="invalid"
          >
            Insert a valid email
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="box box60-80-90 flex-column">
          <Form.Control
            data-testid="password-input"
            isInvalid={!password.valid}
            isValid={password.valid}
            onChange={(e) => {
              setConfirm({
                value: confirm.value,
                valid: e.target.value === confirm.value,
              });
              handlePassword(e, setPassword);
            }}
            placeholder="password"
            required="required"
            type="password"
          />
          <Form.Control.Feedback
            as="p"
            data-testid="password-invalid"
            style={{ display: password.valid ? "none" : "block" }}
            type="invalid"
          >
            Insert a valid password
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="box box60-80-90 flex-column">
          <Form.Control
            data-testid="confirm-input"
            isInvalid={!confirm.valid}
            isValid={confirm.valid}
            onChange={(e) => handleConfirm(e, setConfirm, password)}
            placeholder="confirm password"
            required="required"
            type="password"
          />
          <Form.Control.Feedback
            as="p"
            data-testid="confirm-invalid"
            style={{ display: confirm.valid ? "none" : "block" }}
            type="invalid"
          >
            Password must match
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="box box60-80-90 flex-column">
          <Form.Check
            data-testid="checkbox-input"
            type="checkbox"
            label="Quero vender"
            onChange={(e) => handleRole(e, setRole)}
          />
        </Form.Group>
      </Form>
      <Button
        className="box box40"
        data-testid="register-submit-btn"
        disabled={
          !confirm.valid || !email.valid || name.valid || !password.valid
        }
        onClick={(e) =>
          handleSubmit(e, { confirm, email, name, password, role }, history)
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
