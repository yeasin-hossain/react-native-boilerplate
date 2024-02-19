import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import appRoutes from '@lib/routes';
import AuthApp from './AuthApp';
import AppScreenContainer from './AppScreenContainer';

const Stack = createNativeStackNavigator();

function RootApp() {
  return (
    <Stack.Navigator
      initialRouteName={appRoutes.app}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={appRoutes.auth} component={AuthApp} />
      <Stack.Screen name={appRoutes.app} component={AppScreenContainer} />
    </Stack.Navigator>
  );
}

export default RootApp;
