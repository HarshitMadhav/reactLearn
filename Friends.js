import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



type Props = {};
export default class Friends extends Component<Props> {
  render() {

const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');


    return (
      <View style={styles.container}>
       
       <Text>Details Screen</Text>
        <Text> {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
 


        <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Button
           title="Back to home"
          onPress={() =>
            this.props.navigation.goback()
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
