import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import * as firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

import AppWithNavigationState from './src/AppWithNavigationState';

class App extends React.Component {
  componentWillMount() {
    this.store = createStore(
      Reducers, 
      undefined, 
      compose(
        autoRehydrate(),
        applyMiddleware(ReduxThunk)
      ),
    );
  }
  componentDidMount() {
    persistStore(this.store, { storage: AsyncStorage });
  }
   render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}


Expo.registerRootComponent(App);
/*
<View style={styles.container}>
        <Text>Open up main.js to start working on your app!</Text>
      </View>



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/