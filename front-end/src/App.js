import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Client/Profile";
import Products from "./pages/Client/Products";
import Register from "./pages/Register";
import Checkout from "./pages/Client/Checkout";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./NotFound";

function App () {
  return (
    <div className="app">
      <Switch>
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/checkout" component={Checkout} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
