import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import appRoutes from '@lib/routes';
import AuthApp from './AuthApp';
import AppScreenContainer from './AppScreenContainer';
import useGetAuthData from '@redux/hook/useGetAuthData';

const Stack = createNativeStackNavigator();

function RootApp() {
  const {isLoggedIn} = useGetAuthData();
  return (
    <Stack.Navigator
      initialRouteName={appRoutes.app}
      screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <Stack.Screen name={appRoutes.app} component={AppScreenContainer} />
      ) : (
        <Stack.Screen name={appRoutes.auth} component={AuthApp} />
      )}
    </Stack.Navigator>
  );
}

export default RootApp;
