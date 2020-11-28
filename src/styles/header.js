import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        backgroundColor: '#2ecc71',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '700',
        marginLeft: 10,
        color: 'white'
    },
    viewIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon1: {
        width: 35,
        height: 35
    },
    icon2: {
        width: 65,
        height: 65
    },
    icon3: {
        width: 25,
        height: 25,
        tintColor: 'white'
    }
});