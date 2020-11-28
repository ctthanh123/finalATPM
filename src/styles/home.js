import {Dimensions, StyleSheet} from 'react-native';

const { width } = Dimensions.get('window'); 

export default StyleSheet.create({
  container: {
    flex: 1
  },
  containerView: {
    flex: 9,
    backgroundColor: 'white',
  },
  photoView: {
    flex: 1,
  },
  photo: {
    width: width / 3 - 4, 
    height: width / 3 - 4, 
    margin: 2, 
  }, 
  barIcon: { 
    width: 30, 
    height: 30, 
  },
  buttonCamera: {
   
  },
  cameraIcon: {
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: width / 24,
    right: width / 20,
  }
});
