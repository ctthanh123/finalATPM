import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Button from 'react-native-button';
import styles from '../styles/home';
import PhotosData from '../datas/fakeDatas';
import ShowPhoto from './ShowPhoto';

class PhotoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handlePressPhoto} = this.props;
    return (
      <Button
        style={styles.photoView}
        onPress={
          handlePressPhoto
          //   () => {
          //   // this.props.parentFlatList.showPhoto.current.showModalPhoto(
          //   //   PhotosData[this.props.index],
          //   //   this,
          //   // );
          // }
        }>
        <Image style={styles.photo} source={{uri: this.props.item.photoURL}} />
      </Button>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
  }

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
    this.showPhoto.showModalPhoto(PhotosData[index], []);
  };

  render() {
    return (
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
        <ShowPhoto
          ref={(ref) => (this.showPhoto = ref)}
          parentFlatList={this}
        />
      </View>
    );
  }
}

export default Home;
