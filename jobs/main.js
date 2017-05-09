import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';

class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      Welcome: { screen: WelcomeScreen },
      Auth: { screen: AuthScreen },
    });
    return <MainNavigator />;
  }
}

Expo.registerRootComponent(App);
