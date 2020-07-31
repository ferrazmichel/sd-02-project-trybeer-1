import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormGroup from "../../components/FormGroup";
import { handleConfirm, handleRole, handleSubmit } from "./service";
import { handleField } from "../../services/Validate";
import "./style.css";

const PasswordField = ({ password, confirm, setPassword, setConfirm }) => (
  <Form.Group className="form_group_component">
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
        confirm.value &&
          handleConfirm({
            value: confirm.value,
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
);

const ConfirmField = ({ confirm, setConfirm, password }) => (
  <Form.Group className="form_group_component">
    <Form.Control
      data-testid="confirm-input"
      isInvalid={confirm.error}
      isValid={!confirm.error && confirm.value}
      onChange={(e) => {
        handleConfirm({
          value: e.target.value,
          callback: setConfirm,
          password: password.value,
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
);

const RoleField = ({ setRole }) => (
  <Form.Group className="form_group_check">
    <Form.Check
      id="checkbox"
      type="checkbox"
      label="Quero vender"
      onChange={(e) => handleRole({ value: e.target.checked, setRole })}
    />
  </Form.Group>
);

const SubmitButton = ({
  data: { confirm, email, name, password, role },
  history,
}) => (
  <Button
    className="register_page_submit_button"
    data-testid="register-submit-btn"
    disabled={
      confirm.error ||
      !confirm.value ||
      email.error ||
      !email.value ||
      name.error ||
      !name.value ||
      password.error ||
      !password.value
    }
    onClick={async (event) =>
      await handleSubmit({
        event,
        body: {
          confirm: confirm.value,
          email: email.value,
          name: name.value,
          password: password.value,
          role,
        },
        history,
      })
    }
    type="submit"
    variant="outline-success"
  >
    Cadastrar
  </Button>
);

function Register() {
  const history = useHistory();
  const [confirm, setConfirm] = useState({ value: null, error: null });
  const [email, setEmail] = useState({ value: null, error: null });
  const [name, setName] = useState({ value: null, error: null });
  const [password, setPassword] = useState({ value: null, error: null });
  const [role, setRole] = useState("client");

  return (
    <section className="register_page">
      <Form className="register_page_form">
        <FormGroup state={name} callback={setName} field="name" />
        <FormGroup state={email} callback={setEmail} field="email" />
        <PasswordField
          password={password}
          confirm={confirm}
          setPassword={setPassword}
          setConfirm={setConfirm}
        />
        <ConfirmField
          confirm={confirm}
          setConfirm={setConfirm}
          password={password}
        />
        <RoleField setRole={setRole} />
      </Form>
      <SubmitButton
        data={{ confirm, email, name, password, role }}
        history={history}
      />
    </section>
  );
}

export default Register;
