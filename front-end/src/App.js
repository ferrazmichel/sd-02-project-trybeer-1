import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="app">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/products" component={Products} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
    </div>
  );
}

export default App;
