import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from '@screens/welcome/WelcomeScreen';
import appRoutes from '@lib/routes';
import LoginScreen from '@screens/auth/login/LoginScreen';
import useGetAuthData from '@redux/hook/useGetAuthData';

const AuthStack = createNativeStackNavigator();

const AuthApp = () => {
  const {isLoggedIn} = useGetAuthData();
  return (
    <AuthStack.Navigator initialRouteName={appRoutes.welCome}>
      <AuthStack.Screen name={appRoutes.login} component={LoginScreen} />
      <AuthStack.Screen
        name={appRoutes.welCome}
        component={WelcomeScreen}
        options={{
          title: 'Sign in',
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthApp;
