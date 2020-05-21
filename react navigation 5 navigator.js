react navigation 5 with bottom tab along with middle tab image bigger and active tab icon different
and inactive tab icon different along with a active bar on currently active tab on top of tab.


import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './Splash'
import Slider from './Slider'
import Login from './Login'
import Signup from './Signup'
import Otp from './Otp'
import Home from './Home'
import MyAccount from './MyAccount'

const Tab = createBottomTabNavigator();     

function Tabs() {
  return (
      <Tab.Navigator
      shifting={true}
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let yesFoc;
            if (route.name === 'Home') {

              if(focused){
              iconName=require('./resources/bottomtab/home_active.png')
                       yesFoc= <View style={{backgroundColor:'#1976D2', height:4, width:60, position:'absolute',top:-6, alignSelf:'center', borderRadius:5}}/>
              }else{
              iconName= require('./resources/bottomtab/home_inactive.png')                
              }

            } else if(route.name === 'Consult Now'){

            return<Image
                            source={require('./resources/bottomtab/consult.png')}
                            style={{height:55, width:55, resizeMode:'contain', marginBottom:25}}
                        />;

              // iconName = focused
              // ? require('./resources/bottomtab/consult.png')
              // : require('./resources/bottomtab/consult.png')
            } else if(route.name === 'My Account'){
              if(focused){
              iconName=require('./resources/bottomtab/account_active.png')
                       yesFoc= <View style={{backgroundColor:'#1976D2', height:4, width:60, position:'absolute',top:-6, alignSelf:'center', borderRadius:5}}/>
              }else{
              iconName= require('./resources/bottomtab/account_inactive.png')                
              }

              // iconName = focused
              // ? require('./resources/bottomtab/account_active.png')
              // : require('./resources/bottomtab/account_inactive.png')
            }
            // You can return any component that you like here!
            return(
            <View>
            {yesFoc}
            <Image
                source={iconName}
                style={{height:20, width:20, resizeMode:'contain',alignSelf:'center'}}
                />
            </View>)
          },
        })}
        tabBarOptions={{
          height: 80,
          activeTintColor: '#1976D2',
          inactiveTintColor: 'gray',
          activeBackgroundColor :'white',
          inactiveBackgroundColor :'white',
          labelStyle :{fontFamily: 'AvenirLTStd-Heavy', fontSize:20}          
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Consult Now" component={Splash}/>
        <Tab.Screen name="My Account" component={MyAccount} 
   listeners={{
    tabPress: e => {
      // Prevent default action
      console.log('ji')
    },
  }} />
      </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
        name="Splash" component={Splash} />
        <Stack.Screen
        name="Slider" component={Slider} />
        <Stack.Screen
        name="Login" component={Login} />
        <Stack.Screen
        name="Signup" component={Signup} />
        <Stack.Screen
        name="Otp" component={Otp}/>
        <Stack.Screen name="Tab" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
