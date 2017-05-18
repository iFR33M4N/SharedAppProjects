import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';

import * as actions from '../actions';

class AuthScreen extends Component {
    componentDidMount() {
        this.props.facebookLogin();
    }
    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }
    onAuthComplete(props) {
        if (props.token) {
            this.props.navigation.navigate('Map');
        }
    }
    render() {
        return (
            <View>
                <AppLoading />
            </View>
        );
    }
}

function mapStateToProps({ auth }) {
    return { token: auth.token };
}
export default connect(mapStateToProps, actions)(AuthScreen);