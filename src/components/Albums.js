import React, {Component} from 'react'; 
import {View, Text, Image, FlatList} from 'react-native'; 
import styles from '../styles/album';
import albums from '../datas/albumData';
import Header from './Header';
 
class AlbumItem extends Component {
  render() {
    return (
      <View style={styles.albumItemView}>
        <Image source={{uri: this.props.item.photoURL}} style={styles.album} />
        <Text style={styles.text}>
          {this.props.item.name}
        </Text>
      </View>
    );
  }
}

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
      <View style={styles.container}>
        <Header />
        <View style={styles.containerAlbums}> 
          <FlatList 
            data={albums}
            numColumns={2}
            keyExtractor={(item) => item.key}
            renderItem={({ item, index }) => {
              return <AlbumItem item={item} index={index} />;
            }}
          />
        </View> 
      </View>
    ); 
  } 
} 

export default Albums; 
 