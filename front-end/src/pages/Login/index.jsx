import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import getField from "../../components/getField";
import { handleSubmit } from "./service";


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
