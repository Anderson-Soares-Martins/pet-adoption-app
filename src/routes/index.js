import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
