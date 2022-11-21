
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';

const routes = [
  {
    name: 'Login',
    component: Login,
    options: {
      headerShown: false
    }
  },
  {
    name: 'Home',
    component: Home,
    options: {
      headerShown: false
    }
  }
]

export default routes;