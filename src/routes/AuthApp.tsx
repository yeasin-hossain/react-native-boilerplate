import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from '@screens/welcome/WelcomeScreen';
import appRoutes from '@lib/routes';
import LoginScreen from '@screens/auth/login/LoginScreen';

const AuthStack = createNativeStackNavigator();

const AuthApp = () => {
  return (
    <AuthStack.Navigator initialRouteName={appRoutes.welCome}>
      <AuthStack.Screen name={appRoutes.login} component={LoginScreen} />
      <AuthStack.Screen name={appRoutes.welCome} component={WelcomeScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthApp;
