import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Client/Profile";
import Products from "./pages/Client/Products";
import Register from "./pages/Register";
import PrivateRoute from "./PrivateRoute";
import AdminProfile from './pages/Admin/Profile';
import AdminRoute from "./AdminRoute";


function App() {
  return (
    <div className="app">
      <Switch>
        <PrivateRoute exact path="/products" component={Products} />
        <PrivateRoute path="/profile" component={Profile} />
        <AdminRoute path="/admin/profile" component={AdminProfile} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
