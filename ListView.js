import React, { Component } from 'react';
import { ListView, Text, View, Image, StyleSheet } from 'react-native';
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: 2,
      },
      img: {
        width: 110,
        height: 110,
      },
	titleText: {
		fontSize: 40,
		fontWeight: 'bold',
		color: 'red',
		textAlign: 'right',
		textAlignVertical: 'top',
		paddingTop: 0
	},
    });
    
    class ListViewDemo extends Component {
      constructor(props) {
        super(props);
    
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    
        this.state = {
          dataSource: ds.cloneWithRows(['This is a drug which is used to cure fever', 'This is a drug which is used to reduce headaches']),
        };
      }
      render() {
        const imageSource = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg';
        return (
          <ListView
            dataSource={this.state.dataSource}
            renderRow={data => (
              <View style={styles.container}>
                <Image
                  source={{ uri: imageSource }}
                  style={styles.img}
                />
                <Text>{data}</Text>
		<Text>This is it</Text>
		<Text style={styles.titleText}>This is my text </Text>
		
              </View>)}
          />
        );
      }
    }
    export default ListViewDemo;
