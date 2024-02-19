import {StyleSheet, View} from 'react-native';
import React from 'react';
import SmallButton from '@components/buttons/SmallButton';
import useAppDispatch from '@redux/hook/useAppDispatch';
import {toggleAuth} from '@redux/slice/auth-slice';

const WelcomeScreen = () => {
  const dispatch = useAppDispatch();
  const login = () => {
    dispatch(toggleAuth(true));
  };
  return (
    <View>
      <SmallButton title={'Login'} onPress={login} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
