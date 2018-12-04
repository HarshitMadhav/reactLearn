import { createStackNavigator , createAppContainer } from 'react-navigation';
import Home from './Home';
import Friends from './Friends.js';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
   Friends: { screen: Friends},
});

export default createAppContainer(AppNavigator);
