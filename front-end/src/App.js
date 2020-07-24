import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';

function App () {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/products" component={Products} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
