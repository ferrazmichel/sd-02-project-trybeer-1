import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Client/Profile";
import Products from "./pages/Client/Products";
import Register from "./pages/Register";
import Orders from "./pages/Client/Orders";
import AdminOrder from './pages/Admin/Order';
import Checkout from "./pages/Client/Checkout";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./NotFound";
import Home from "./pages/Admin/Home";

function App () {
  return (
    <div className="app">
      <Switch>
<<<<<<< HEAD
        <PrivateRoute exact path="/orders" component={Orders} />
        <PrivateRoute exact path="/admin/orders" component={Home} />
        <PrivateRoute exact path="/products" component={Products} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/checkout" component={Checkout} />
        <Route path="/admin/orders/:id" component={AdminOrder} />
        <Route exact path="/register" component={Register} />
=======
        <PrivateRoute path="/orders" component={Orders} />
        <Route path="/admin/orders/:id" component={AdminOrder} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/checkout" component={Checkout} />
        <Route path="/register" component={Register} />
>>>>>>> master
        <Route exact path="/" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
