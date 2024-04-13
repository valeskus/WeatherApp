import React from 'react';
import {Provider} from 'react-redux';
import {store} from './stores/rootStore';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import {Home} from './screens/Home';
import {Forecast} from './screens/Forecast';

export type RootStackParamList = {
  Home: undefined;
  Forecast: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function App(): React.JSX.Element {
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
          <Stack.Screen name="Forecast" component={Forecast} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
