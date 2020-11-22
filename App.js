/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import Header from './src/components/Header';
import ShowPhoto from './src/components/ShowPhoto';
import BottomNavigation from './BottomNavigation';

let routeConfigs = {
  BottomNavigation: {screen: BottomNavigation},
  PhotoItem: {screen: ShowPhoto},
};

let tabNavigationConfig = {
  animationEnable: true,
  swipeEnabled: true,
  tabBarOptions: {
    showLabel: true,
    showIcon: true,
    activeTintColor: 'blue',
    labelStyle: {
      fontSize: 14,
    },
    style: {
      backgroundColor: 'white',
      padding: -10,
      marginTop: 5,
    },
  },
  headerMode: 'none',
  initialRouteName: 'BottomNavigation',
};

const TabNavigator = createStackNavigator(routeConfigs, tabNavigationConfig);

const AppContainer = createAppContainer(TabNavigator);

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <View style={{flex: 9}}>
          <AppContainer />
        </View>
      </View>
    );
  }
}

export default App;
