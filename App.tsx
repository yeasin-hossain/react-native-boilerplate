import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootApp from './src/routes/RootApp';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootApp />
    </NavigationContainer>
  );
}

export default App;
