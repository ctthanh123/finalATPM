import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import styles from '../styles/photoItem';
import Modal from 'react-native-modalbox';
import PhotosData from '../datas/fakeDatas';

let screen = Dimensions.get('window');

class ShowPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      photoURL: '',
      flatListItem: null,
    };
    this.modalPhoto = React.createRef();
  }

  showModalPhoto = (currentPhoto, flatListItem) => {
    this.setState({
      key: currentPhoto.key,
      photoURL: currentPhoto.photoURL,
      flatListItem,
    });
    this.modalPhoto.current.open();
  };

  render() {
    return (
      <Modal
        style={styles.container}
        ref={this.modalPhoto}
        position="center"
        backdrop={true}
        onClosed={() => {
          console.log('close ne hihi');
        }}>
        <Image source={{uri: this.state.photoURL}} />
        <Text style={styles.text}>Photo Item</Text>
      </Modal>
    );
  }
}

export default ShowPhoto;
