import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,Button, TouchableOpacity,
} from 'react-native';
 
import Swiper from 'react-native-swiper';

type Props = {};
export default class App extends Component<Props> {
  render(){
    return (
     
    <View style={{width: '100%', height: '100%',flex: 1, flexDirection: 'column'}}>

      <Swiper 
      style={styles.wrapper} 
      dotStyle={{marginBottom:500}}
      activeDotStyle={{marginBottom:500}}>
        <View style={styles.slide1}>
       <Image style={styles.slide1}
       source={require('./bg.png')}/>
  
        </View>
        <View style={styles.slide1}>
               <Image style={styles.slide1}
       source={require('./bg.png')}/>
  
        </View>
        <View style={styles.slide1}>
               <Image style={styles.slide1}
       source={require('./bg.png')}/>
  
        </View>
          <View style={styles.slide1}>
               <Image style={styles.slide1}
       source={require('./bg.png')}/>
  
        </View>
      </Swiper>

               <Image style={{position:'absolute',marginTop:150,marginLeft:100,flex:1, flexDirection:'row'}}
       source={require('./ganesha.png')}/>

       <TouchableOpacity style={{width:"45%",position:'absolute',marginTop:500,marginLeft:10}}>
        <Button style={{color: 'white'}}
          title="SIGN UP"
        >
        SIGN UP</Button>
        </TouchableOpacity>


       <TouchableOpacity style={{width:"45%",position:'absolute',marginTop:500,marginLeft:220,backgroundColor: "white"}}>
        <Button style={{ color: 'white'}}
          title="LOG IN"
        >
        LOG IN</Button>
        </TouchableOpacity>

<Text style={{color:'white',height:50,fontSize:15, position:'absolute',marginTop:580, marginLeft:75}}>
By continuing you agree to our
</Text>
<Text style={{color:'white',height:50,fontSize:18, position:'absolute',marginTop:600, marginLeft:80}}>
terms of service and privacy policy.
</Text>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    width: null,
    height:null
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})