import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FormGroup, Message, SubmitButton } from "../../components";
import { RegisterButton } from "./components";
import { handleSubmit } from "./service";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState({ value: null, error: null });

  const [password, setPassword] = useState({ value: null, error: null });

  const [error, setError] = useState();

  const isDisabled =
    !email.value || !password.value || email.error || password.error;

  const body = { email: email.value, password: password.value };

  return (
    <section className="login_page">
      <header>
        <h1>Trybeer Masculinahs</h1>
        <h2>Login</h2>
      </header>
      {error && (
        <Message message={error} setError={setError} type="ALERT" infinity />
      )}
      <Form>
        <FormGroup
          callback={setEmail}
          field="email"
          state={email}
          testId="email-input"
        />
        <FormGroup
          callback={setPassword}
          field="password"
          state={password}
          testId="password-input"
        />
        <SubmitButton
          body={body}
          isDisabled={isDisabled}
          handleSubmit={handleSubmit}
          label="Signin"
          setError={setError}
          testId="signin-btn"
        />
        <RegisterButton />
      </Form>
    </section>
  );
};

export default Login;
