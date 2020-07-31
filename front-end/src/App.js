import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Client/Profile";
import Products from "./pages/Client/Products";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="app">
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/products" component={Products} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/register" component={Register} />
        </Switch>
    </div>
  );
}

export default App;
