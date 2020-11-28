import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import styles from '../styles/photoItem';
import Modal from 'react-native-modalbox';

let screen = Dimensions.get('window');

class ShowPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      photoURL: ''
    };
  }

  showModalPhoto = (currentPhoto) => {
    this.setState({
      key: currentPhoto.key,
      name: currentPhoto.name,
      photoURL: currentPhoto.photoURL,
    });
    this.modalPhoto.open();
  };

  render() {
    return (
      <Modal 
        style={styles.container} 
        ref={ref => this.modalPhoto = ref} 
        position="center" 
        backdrop={true} 
        onClosed={() => { 
          console.log('close ne hihi'); 
        }}> 
        <View style={styles.viewName}>
            <Image source={require('../assets/Photo-icon.png')} style={styles.iconName} />
            <Text style={styles.textName}> { this.state.name } </Text> 
        </View>
        <View style={styles.viewPhotoItem}>
            <Image source={{uri: this.state.photoURL}} style={styles.photo} /> 
        </View>
        <View style={styles.viewOption}>
            <Image source={require('../assets/lock.png')} style={styles.option} />
            <Image source={require('../assets/location.png')} style={styles.option2} />
            <Image source={require('../assets/heart.png')} style={styles.option3} />
        </View>
      </Modal> 
    ); 
  }
}

export default ShowPhoto; 
