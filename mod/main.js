import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingScreen from './screens/SettingScreen';
import ReviewScreen from './screens/ReviewScreen';

class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      Welcome: { screen: WelcomeScreen },
      Auth: { screen: AuthScreen },
      Main: {
        screen: DrawerNavigator({
          Hair: { screen: HairScreen },
          Makeup: { screen: MakeupScreen },
          Nails: { screen: NailsScreen },
          Shop: {},
          Schedule: {
            screen: StackNavigator({
              Review: { screen: ReviewScreen },
              Settings: { screen: SettingScreen }
            })
          }
        }, {
          tabBarPosition: 'bottom'
        })
      },
    }, {
      tabBarPosition: 'bottom',
      lazy: true,
      navigationOptions: {
        tabBarVisible: false 
      }
    });
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
Expo.registerRootComponent(App);
