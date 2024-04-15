import React from 'react';
import { Provider } from 'react-redux';
import { store } from './stores/rootStore';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar, UIManager } from 'react-native';
import { Home } from './screens/Home';
import { Forecast } from './screens/Forecast';
import { Settings } from './screens/Settings';
import { Header } from './components/Header';
import { HeaderButton } from './components/HeaderButton';
import { Colors } from './UI/Colors';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export type RootStackParamList = {
  Home: undefined;
  Forecast: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
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
        <Stack.Navigator
          screenOptions={{
            cardStyle: {
              backgroundColor: Colors.background,
            },
          }}>
          <Stack.Screen
            options={{
              title: 'Home',
              header: ({ options }) => (
                <Header
                  options={options}
                  headerLeft={<HeaderButton title="Settings" />}
                  headerRight={<HeaderButton title="Calendar" />}
                />
              ),
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              title: 'Forecast',
              header: ({ options }) => <Header options={options} />,
            }}
            name="Forecast"
            component={Forecast}
          />
          <Stack.Screen
            options={{
              title: 'Settings',
              // eslint-disable-next-line react/no-unstable-nested-components
              header: ({ options }) => <Header options={options} />,
            }}
            name="Settings"
            component={Settings}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
