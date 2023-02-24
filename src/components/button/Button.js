import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Button.style'

const Button = ({ title, onPress, visibility }) => {
    return (
        visibility && <View style={styles.button}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button