import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/stores/rootStore';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import {Home} from './src/screens/Home';

export default function App(): React.JSX.Element {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
