import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Button from 'react-native-button';
import styles from '../styles/home';
import PhotosData from '../datas/fakeDatas';
import ShowPhoto from './ShowPhoto';
import Header from './Header';

class PhotoItem extends Component {
  render() {
    const { handlePressPhoto } = this.props;
    return (
      <Button
        style={styles.photoView}
        onPress={ handlePressPhoto }>
        <Image style={styles.photo} source={{uri: this.props.item.photoURL}} /> 
      </Button> 
    ); 
  } 
}

class Home extends Component {
  static navigationOptions = ({navigation}) => {
    let tabBarLabel = 'Photos';
    let tabBarIcon = () => {
      return (
        <Image
          style={styles.barIcon}
          source={require('../assets/photoss.png')}
        />
      );
    };
    return {
      tabBarLabel,
      tabBarIcon,
    };
  };

  handlePressPhoto = (index) => {
    //const {navigation} = this.props
    this.showPhoto.showModalPhoto(PhotosData[index]);
   // navigation.navigate('PhotoItem')
  };
 
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.containerView}> 
          <FlatList 
            data={PhotosData} 
            keyExtractor={(item) => item.key} 
            numColumns={3} 
            renderItem={({item, index}) => { 
              return ( 
                <PhotoItem 
                  item={item} 
                  index={index}  
                  handlePressPhoto={() => this.handlePressPhoto(index)}  
                /> 
              ); 
            }} 
          /> 
          <ShowPhoto ref={(ref) => (this.showPhoto = ref)} /> 
          <Button onPress={() => console.log('Taka a Photo')} 
            style={styles.buttonCamera}
          >
            <Image source={require('../assets/camera2.png')} style={styles.cameraIcon} />
          </Button>
        </View> 
      </View>
    ); 
  } 
}

export default Home;
