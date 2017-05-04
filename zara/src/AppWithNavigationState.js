import Expo from 'expo';
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { 
    addNavigationHelpers, 
    StackNavigator 
} from 'react-navigation';

const AppNavigator = StackNavigator({
    Main: { screen: MainScreen },
}, {
    initialRouteName: 'Main',
    headerMode: 'screen',
});

const AppWithNavigationState = connect(state => ({
    nav: state.nav
}))(({ dispatch, nav }) => (
    <AppNavigator navigation={
        addNavigationHelpers({
            dispatch, state: nav
        })
    } />
));

export default AppWithNavigationState;