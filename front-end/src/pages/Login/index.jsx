import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormGroup from "../../components/FormGroup";
import { handleSubmit } from "./service";
import "./style.css";

const RegisterButton = ({ history }) => (
  <Button
    className="login_page_register_button"
    data-testid="register-btn"
    onClick={() => history.push("/register")}
    type="button"
    variant="outline-success"
  >
    Ainda não tenho conta
  </Button>
);

const SubmitButton = ({ email, password, history }) => (
  <Button
    className="login_page_submit_button"
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
    variant="outline-success"
  >
    Entrar
  </Button>
);

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState({ value: null, error: null });
  const [password, setPassword] = useState({ value: null, error: null });

  return (
    <section className="login_page">
      <Form className="login_page_form">
        <FormGroup state={email} callback={setEmail} field="email" />
        <FormGroup state={password} callback={setPassword} field="password" />
      </Form>
      <SubmitButton email={email} password={password} history={history} />
      <RegisterButton history={history} />
    </section>
  );
};

export default Login;
