import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Client/Profile";
import Products from "./pages/Client/Products";
import Register from "./pages/Register";
import Orders from "./pages/Client/Orders";
import Order from "./pages/Client/Order";
import AdminOrder from './pages/Admin/Order';
import Checkout from "./pages/Client/Checkout";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./NotFound";

function App () {
  return (
    <div className="app">
      <Switch>
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute exact path="/orders" component={Orders} />
        <PrivateRoute exact path="/orders/:id" component={Order} />
        <PrivateRoute path="/checkout" component={Checkout} />
        <PrivateRoute path="/admin/orders/:id" component={AdminOrder} />
        <PrivateRoute path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
