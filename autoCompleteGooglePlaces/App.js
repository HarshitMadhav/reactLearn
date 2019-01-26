   ----------------npm install react-native-google-autocomplete firstly and then get the api key and then import LocationItem.js

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Button
} from 'react-native';

import { GoogleAutoComplete } from 'react-native-google-autocomplete';

import LocationItem from './LocationItem.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <GoogleAutoComplete apiKey='AIzaSyBWX-QNm_gVzt6U2K6xeU4cmF5dkX8XUQ0' debounce={500} minLength={1}>
          {({
            handleTextChange,
            locationResults,
            fetchDetails,
            isSearching,
            inputValue,
            clearSearchs
          }) => (
            <React.Fragment>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Search a places"
                  onChangeText={handleTextChange}
                  value={inputValue}
                />
                <Button title="Clear" onPress={clearSearchs} />
              </View>
              {isSearching && <ActivityIndicator size="large" color="red" />}
              <ScrollView>
                {locationResults.map(el => (
                  <LocationItem
                    {...el}
                    key={el.id}
                    fetchDetails={fetchDetails}
                  />
                ))}
              </ScrollView>
            </React.Fragment>
          )}
        </GoogleAutoComplete>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: 300,
    borderWidth: 1,
    paddingHorizontal: 16,
  },
  inputWrapper: {
    marginTop: 80,
    flexDirection: 'row'
  },
});
