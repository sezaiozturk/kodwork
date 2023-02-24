import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Button.style'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Button = ({ title, onPress, visibility, icon }) => {
    return (
        visibility && <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress} >
                <Icon name={icon} size={20} color='white' />
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Button