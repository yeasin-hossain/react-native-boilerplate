import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import appRoutes from '@lib/routes';
import AuthApp from './AuthApp';
import AppScreenContainer from './AppScreenContainer';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';

const Stack = createNativeStackNavigator();

function RootApp() {
  const {isLoggedIn} = useSelector((state: RootState) => state.auth);
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
