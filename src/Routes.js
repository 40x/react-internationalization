import Home from './Home';
import About from './About';
import Settings from './Settings';

export default [
  {
    path: "/",
    title: 'app.navigation.home',
    component: Home,
    exact: true
  },
  {
    path: "/about",
    title: 'app.navigation.about',
    component: About,
    exact: true
  },
  {
    path: "/settings",
    title: 'app.navigation.settings',
    component: Settings,
    exact: true
  }
]