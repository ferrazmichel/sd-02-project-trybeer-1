import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Register from "./pages/Register";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="app">
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/products" component={Products} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
        </Switch>
    </div>
  );
}

export default App;
