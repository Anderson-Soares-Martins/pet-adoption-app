import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import Login from '../screens/Login/Login';
// import Home from '../screens/Home';



const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }} />
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
}
