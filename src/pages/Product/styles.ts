import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
    },

    title: {
        fontSize: 22,
        marginBottom: 30,
    },

    subtitle: {
        fontSize: 16,
        marginBottom: 10,
    },

    titleButton: {
        marginHorizontal: 10,
    },

    list: {
        width: Dimensions.get('window').width - 20
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    containerHeader: {
        height: 40,
        paddingRight: 5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#f2f2f2',
        justifyContent: 'space-around',
        width: Dimensions.get('window').width - 20,
    },
});