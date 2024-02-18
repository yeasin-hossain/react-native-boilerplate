import React from 'react';
import {useColorScheme, View} from 'react-native';
import {Button} from '@rneui/themed';
import {Icon} from '@rneui/themed';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SmallButton from '@components/buttons/SmallButton';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
