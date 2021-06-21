import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    label: {
        fontSize: 15,
        marginBottom: 5,
    },
    input: {
        height: 35,
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: Dimensions.get('screen').width - 40,
    }
});