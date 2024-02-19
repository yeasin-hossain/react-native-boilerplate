import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootApp from './src/routes/RootApp';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootApp />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
