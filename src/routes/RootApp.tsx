import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@screens/home/HomeScreen';
import AuthApp from './AuthApp';
import appRoutes from '@lib/routes';

const Stack = createNativeStackNavigator();

function RootApp() {
  return (
    <Stack.Navigator initialRouteName={appRoutes.auth}>
      <Stack.Screen name={appRoutes.auth} component={AuthApp} />
      <Stack.Screen name={appRoutes.app} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default RootApp;
