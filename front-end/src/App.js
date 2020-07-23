import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

function App () {
  return (
    <div className="login_page">    
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
    <p>TEST APPP</p>
    </div>
  );
}

export default App;
