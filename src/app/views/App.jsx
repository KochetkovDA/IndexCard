import React from 'react';
import { Route } from 'react-router-dom';
import { RightNavBar } from './components';
import routes from '../routes';

const App = () => (
  <div>
    <RightNavBar />
    { routes.map((route) => (
      <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
    )) }
  </div>
);

export default App;
