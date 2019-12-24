
import { Home, Test } from '../views/pages';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/test-route',
    component: Test,
    exact: true,
  },
];

export default routes;
