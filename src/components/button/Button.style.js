import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#EB455F',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        margin: 10
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 10
    }
})