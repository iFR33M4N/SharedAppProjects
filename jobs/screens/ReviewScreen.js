import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Review Jobs',
      style: { paddingTop: Platform === 'android' ? 24 : 0,},
      headerRight: (
        <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0, 122, 255, 1)"
        />
      ),
    };
  }

    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;