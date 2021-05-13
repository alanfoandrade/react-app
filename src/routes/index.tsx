import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AppRoutes from './app.routes';

const Stack = createStackNavigator();

export const Routes: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="AppRoutes"
      component={AppRoutes}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
