import {StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: width - width/5,
        height: width + width/13,
        borderRadius: 18
    }, 

    viewName: {
        marginTop: 4,
        marginLeft: 8,
        height: width/9,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    iconName: {
        width: width/11,
        height: width/11,
    },
    textName: {
        fontSize: 16,
        color: '#2ecc71',
        marginLeft: 5
    },

    viewPhotoItem: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    photo: {
        width: width - width/5,
        height: width - width/5
    },

    viewOption: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    option: {
        width: width/15,
        height: width/15,
    },
    option2: {
        width: width/15,
        height: width/15,
    },
    option3: {
        width: width/11,
        height: width/11,
    },
});