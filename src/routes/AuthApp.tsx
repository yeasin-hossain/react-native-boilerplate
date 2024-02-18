import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from '@screens/welcome/WelcomeScreen';
import appRoutes from '@lib/routes';
import LoginScreen from '@screens/auth/login/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthApp = () => {
  return (
    <Stack.Navigator initialRouteName={appRoutes.welCome}>
      <Stack.Screen name={appRoutes.welCome} component={WelcomeScreen} />
      <Stack.Screen name={appRoutes.login} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthApp;
