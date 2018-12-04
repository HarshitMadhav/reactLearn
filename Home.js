import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Button} from 'react-native';



type Props = {};
export default class Home extends Component<Props> {
  render() {
   
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Friends', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

