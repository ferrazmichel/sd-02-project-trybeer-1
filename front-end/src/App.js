import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Client/Profile";
import Products from "./pages/Client/Products";
import Register from "./pages/Register";
import PrivateRoute from "./PrivateRoute";
import AdminOrder from './pages/Admin/Order';

function App() {
  return (
    <div className="app">
      <Switch>
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/admin/orders/:id" component={AdminOrder} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
