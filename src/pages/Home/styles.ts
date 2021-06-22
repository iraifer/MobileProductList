import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        alignItems: 'center',
        marginTop: 5,
        padding: 10,
    },

    title: {
        fontSize: 22,
        marginBottom: 5,
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

    logo: {
        height: Dimensions.get('window').width -20,
        width: Dimensions.get('window').width,
        marginBottom: 10,
    },

    appButtonContainer: {
        width: Dimensions.get('window').width - 20,
        backgroundColor: '#0000ff',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 12,
        justifyContent: 'center'

    },
    
    appButtonText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },

    avoidView: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
});