import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  containerView: {
    flex: 1,
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
    width: 26,
    height: 26,
  },
});
