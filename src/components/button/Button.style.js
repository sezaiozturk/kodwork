import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    button: {
        backgroundColor: '#EB455F',
        width: Dimensions.get('window').width / 2.4,
        padding: 10,
        borderRadius: 5
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})