import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    scroll_container: {
        height: Dimensions.get('window').height / 1.3,
        marginBottom: 10
    },
    container: {

    },
    main_title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#5F525F',
        marginBottom: 5
    },
    head_container: {
        flexDirection: 'row',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#EB455F',
        marginBottom: 5
    },
    text: {
        fontSize: 14,
        fontWeight: '500',

    },
    description_title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5F525F',
        textAlign: 'center'
    },
    html_container: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        padding: 5
    },
    foot: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
})