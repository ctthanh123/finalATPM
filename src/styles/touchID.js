import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20
    },
    input: {
        height: width / 8,
        width: width - 70,
        borderRadius: 20,
        backgroundColor: 'white',
        marginBottom: 20,
        color: '#333',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    button2:{
    },
    text3: {
        marginBottom: 10,
        color: "#fff",
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: "#E08283",
        paddingTop: width / 30,
        paddingBottom: width / 30,
        paddingLeft: width / 4 + 10,
        paddingRight: width / 4 + 10,
        borderRadius: 20,
    },
    text2: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10
    },
    text: {
        color: '#fff',
        fontSize: 12,
        marginTop: 15,
        fontWeight: '700'
    },
    finger: {
        width: width / 5,
        height: width / 5,
        tintColor: '#fff'
    },

    button3: {
        marginTop: 10,
        backgroundColor: '#E08283',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: width / 30,
        paddingBottom: width / 30,
        paddingLeft: width / 5,
        paddingRight: width / 5,
        borderRadius: 20,
    }
});

