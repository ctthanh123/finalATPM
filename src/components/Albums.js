import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from '../styles/album';

class Albums extends Component {
  static navigationOptions = ({navigation}) => {
    let tabBarLabel = 'Albums';
    let tabBarIcon = () => {
      return (
        <Image
          style={styles.barIcon}
          source={require('../assets/albums.png')}
        />
      );
    };
    return {
      tabBarLabel,
      tabBarIcon,
    };
  };

  render() {
    return (
      <View style={styles.containerAlbums}>
        <Text style={styles.text}>ALBUMS is coming...</Text>
      </View>
    );
  }
}

export default Albums;
