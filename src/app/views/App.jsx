import React from 'react';
import { Link, Route } from 'react-router-dom';
import routes from '../routes';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/test-route">Example Page</Link>
    </header>

    { routes.map((route) => (
      <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
    )) }

    <footer>
          I`m the footer, I am on every page.
    </footer>
  </div>
);

export default App;
