import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native'; 




const { width, height } = Dimensions.get('window');

const equalWidth =  (width / 2 ) 

export default class Friends extends Component {


  constructor(props) {
    super(props)
    this.state = {
      moviesList: []
    }
  }

  _keyExtractor = (item, index) => item.id;

  renderRowItem = (itemData) => {
    return (
      <View>
      <Text style={{ height: 150,  width : equalWidth}}>{itemData.item.title}</Text>
    
   
      </View>
    )
  }

  componentWillMount() {
    {this.getMoviesFromApiAsync()}
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.moviesList}
          numColumns={2}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderRowItem}
        />
      </View>
    );
  }


  getMoviesFromApiAsync = () => {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        alert(JSON.stringify(responseJson))
        this.setState({ moviesList: responseJson.movies }) // this will update state to re-render ui
        return responseJson.movieList;
      })
      .catch((error) => {
        console.error(error);
      });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    flexDirection: 'column'
  }
});
