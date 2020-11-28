import {StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1
    },
    containerFavourite: {
        flex: 9,
        backgroundColor: 'white',
    },
    barIcon: {
        width: 35,
        height: 35
    },
    
    favouriteView: {
        flex: 1,
        marginBottom: 12
    },
    photo: {
        width: width,
        height: width - width / 3
    },
    details: {
        backgroundColor: "#3333",
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: width
    },
    logo: {
        width: 36,
        height: 36,
        marginRight: 10
    },
    text: {
        fontSize: 16,
        color: "white"
    }
});
