import {View} from 'react-native';
import React from 'react';
import SmallButton from '@components/buttons/SmallButton';
import useAppDispatch from '@redux/hook/useAppDispatch';
import {toggleAuth} from '@redux/slice/auth-slice';

const AnalysisScreen = () => {
  const dispatch = useAppDispatch();
  const login = () => {
    dispatch(toggleAuth(false));
  };
  return (
    <View>
      <SmallButton title={'Log out'} onPress={login} color="error" />
    </View>
  );
};

export default AnalysisScreen;
