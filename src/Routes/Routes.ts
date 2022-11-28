import Login from "../screens/Login/Login";
import Home from "../screens/Home/Home";
import Description from "../screens/Description/Description";

const routes = [
  {
    name: "Login",
    component: Login,
    options: {
      headerShown: false,
    },
  },
  {
    name: "Home",
    component: Home,
    options: {
      headerShown: false,
    },
  },
  {
    name: "Description",
    component: Description,
    options: {
      headerShown: false,
    },
  },
];

export default routes;
