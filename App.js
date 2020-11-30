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
  createStackNavigator,
} from 'react-navigation';

//import Header from './src/components/Header';
//import ShowPhoto from './src/components/ShowPhoto';
import BottomNavigation from './BottomNavigation';
import TouchIDLogin from './src/components/TouchIDLogin';
import PatternLogin from './src/components/PatternLogin';

let routeConfigs = {
  BottomNavigation: { screen: BottomNavigation },
  //PhotoItem: { screen: ShowPhoto },
  Login: { screen: TouchIDLogin },
  Pattern: { screen: PatternLogin }
};

let navigationConfig = {
  headerMode: 'none', 
  initialRouteName: 'Login', 
};

const StackNavigator = createStackNavigator(routeConfigs, navigationConfig);

const AppContainer = createAppContainer(StackNavigator);

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppContainer />
      </View>
    );
  }
}

export default App;

