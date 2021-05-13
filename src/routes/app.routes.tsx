import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Home } from '../pages/App/Home';
import { Dashboard } from '../pages/App/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator>
      <App.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <App.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard',
        }}
      />
    </App.Navigator>
  );
};
export default AppRoutes;
