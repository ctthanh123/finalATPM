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
        fontSize: 24,
        fontWeight: '700',
        marginLeft: 10,
        color: 'white'
    },
    viewIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon1: {
        width: 40,
        height: 40
    },
    icon2: {
        width: 69,
        height: 69
    }
});