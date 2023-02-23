import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './JobsCard.style'

const JobsCard = ({ jobs, navigation }) => {
    handleDetails = () => {
        navigation.navigate('detailsScreen', {
            content: jobs.contents,
            location: jobs.locations[0].name,
            level: jobs.levels[0].name
        })
    }
    return (
        <TouchableWithoutFeedback onPress={handleDetails}>
            <View style={styles.container}>
                <View style={styles.top_container}>
                    <Text style={styles.name}>{jobs.name}</Text>
                    <Text style={styles.type}>{jobs.type}</Text>
                    <View style={styles.inner_container}>
                        <Text style={styles.location}>{jobs.locations[0].name}</Text>
                    </View>
                </View>
                <View style={styles.bottom_container}>
                    <Text style={styles.level}>{jobs.levels[0].name}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default JobsCard