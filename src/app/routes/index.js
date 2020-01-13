
import { Home, examplePage } from '../views/pages';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/test-route',
    component: examplePage,
    exact: true,
  },
];

export default routes;
