import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { validToken } from "./services/Request";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [auth, setAuth] = useState(false);
  const [isTokenValidated, setIsTokenValidated] = useState(false);

  useEffect(() => {
    validToken("http://localhost:3001/users/token")
      .then(() => setAuth(true))
      .catch((err) => {
        setAuth(false);
        localStorage.removeItem("token");
      })
      .then(() => setIsTokenValidated(true));
  }, []);

  if (!isTokenValidated) return <div />;

  return (
    <Route
      {...rest}
      render={(props) => {
        return auth ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
