import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

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
        screen: TabNavigator({
          Map: { screen: MapScreen },
          Deck: { screen: DeckScreen },
          Review: {
            screen: StackNavigator({
              Review: { screen: ReviewScreen },
              Settings: { screen: SettingScreen }
            })
          }
        })
      },
    });
    return <MainNavigator />;
  }
}

Expo.registerRootComponent(App);
