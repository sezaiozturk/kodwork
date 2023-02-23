import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        margin: 10,
        padding: 5
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    type: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5
    },
    inner_container: {
        borderRadius: 15,
        backgroundColor: '#EB455F',
        padding: 6,
        alignSelf: 'baseline',

    },
    location: {
        color: 'white',
        fontWeight: 'bold'
    },
    bottom_container: {
        marginRight: 10
    },
    level: {
        color: '#EB455F',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: "right"
    }
})