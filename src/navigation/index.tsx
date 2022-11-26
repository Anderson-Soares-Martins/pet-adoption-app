import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from '../Routes/Routes';
import * as React from 'react';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      {routes.map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>

  );
}
