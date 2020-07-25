import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <div className="login_page">
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
      <p>TEST APPP</p>
    </div>
  );
}

export default App;
