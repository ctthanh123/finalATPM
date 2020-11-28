import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './src/components/Home';
import Albums from './src/components/Albums';
import Favourites from './src/components/Favourites';

const Navigation = createBottomTabNavigator(
  {
    Home: {screen: Home},
    Albums: {screen: Albums},
    Favourites: {screen: Favourites},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true, 
    tabBarOptions: { 
      showLabel: true, 
      showIcon: true,
      inactiveTintColor: '#9B9B9B', 
      style: {backgroundColor: '#fff', height: 55}, 
      labelStyle: {fontSize: Platform.OS === 'ios' ? 13 : 14}, 
      iconStyle: {size: 5}, 
      tabStyle: {backgroundColor: 'white'}, 
    },
  },
);

export default Navigation;

