import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Client/Profile";
import Products from "./pages/Client/Products";
import Register from "./pages/Register";
import Orders from "./pages/Client/Orders";
import AdminOrder from './pages/Admin/Order';
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="app">
      <Switch>
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/orders" component={Orders} />
        <Route path="/admin/orders/:id" component={AdminOrder} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
