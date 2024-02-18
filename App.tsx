import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Button} from '@rneui/themed';
import {Icon} from '@rneui/themed';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SmallButton from '@components/buttons/SmallButton';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>Hello</Text>
          <Button title="Solid" />
          <Button color="error">Error</Button>
          <Icon reverse name="youtube" type="antdesign" color="#517fa4" />
          <SmallButton title={'Yeasin'} size="md" color="success" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
