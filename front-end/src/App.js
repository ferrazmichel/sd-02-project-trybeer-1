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
import AdminProfile from './pages/Admin/Profile';
import AdminRoute from "./AdminRoute";


function App () {
  return (
    <div className="app">
      <Switch>
        <PrivateRoute exact path="/orders" component={Orders} />
        <AdminRoute exact path="/admin/orders" component={Home} />
        <AdminRoute path="/admin/orders/:id" component={AdminOrder} />
        <PrivateRoute exact path="/products" component={Products} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/checkout" component={Checkout} />
        <AdminRoute path="/admin/profile" component={AdminProfile} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
