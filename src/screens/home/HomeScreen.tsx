import {Button, Icon} from '@rneui/base';
import React from 'react';
import {View, useColorScheme} from 'react-native';
import SmallButton from '@components/buttons/SmallButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <Button title="Solid" />
      <Button color="error">Error</Button>
      <Icon reverse name="youtube" type="antdesign" color="#517fa4" />
      <SmallButton title={'Yeasin'} size="md" color="success" />
    </View>
  );
}

export default HomeScreen;
