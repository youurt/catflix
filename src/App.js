import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';

const App = () => {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/browse">
        <Browse />
      </Route>
    </Router>
  );
};

export default App;
