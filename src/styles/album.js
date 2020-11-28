import {StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1
    },
    containerAlbums: {
        flex: 9,
        backgroundColor: 'white',
    },
    barIcon: {
        width: 26,
        height: 26
    },
    albumItemView: {
        flex: 1,
        margin: 8,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#2ecc71",
        marginLeft: 10
    },
    album: {
        width: width/2 - 18,
        height: width/2 - 18,
        borderRadius: 6
    }
});